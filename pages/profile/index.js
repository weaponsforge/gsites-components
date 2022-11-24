import { useEffect, useState, useRef } from 'react'
import ProfileComponent from '@/components/profile'
import donutChartData from '@/data/donut_data'
import countries from '@/data/countries'
import { options, labels, data } from '@/data/bar_data'
import { getTextContent } from '@/services/textcontent'

const defaultState = { loading: true, msg: '' }

function Profile () {
  const [country, setCountry] = useState('')
  const [textData, setTextData] = useState([])
  const [state, setState] = useState(defaultState)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    const loadData = async () => {
      try {
        const response = await getTextContent({ filename: 'random_text_data.json' })

        if (mounted.current) {
          setTextData(response.data)
          setState(prev => ({ ...prev, loading: false }))
        }
      } catch (err) {
        if (mounted.current) {
          setState(prev => ({ ...prev, msg: 'Error loading data.' }))
        }
      }
    }

    loadData()

    // Prevent state updates if the component was unmounted
    return () => {
      mounted.current = false
    }
  }, [])

  const handleSelectCountry = (e) => {
    const { value } = e.target
    setCountry(value)
  }

  return (
    <ProfileComponent
      country={country}
      countries={countries}
      state={state}
      textData={textData}
      donutData={donutChartData}
      barData={{ options, labels, data }}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default Profile
