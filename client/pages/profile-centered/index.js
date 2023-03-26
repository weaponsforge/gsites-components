import { useEffect, useState, useRef } from 'react'
import ProfileCenteredComponent from '@/components/profile-centered'
import donutChartData from '@/data/donut_data'
import countries from '@/data/countries'
import { options, labels, data } from '@/data/bar_data'
import { getTextContent } from '@/services/textcontent'

const CONTENT_TYPES = {
  RANDOM: 'random',
  REAL: 'real'
}

const defaultState = { loading: true, msg: '' }

function ProfileCentered () {
  const [country, setCountry] = useState('')
  const [content, setContent] = useState([])
  const [textData, setTextData] = useState([])
  const [state, setState] = useState(defaultState)
  const [randomTextData, setRandomTextData] = useState([])
  const [contentType, setContentType] = useState(CONTENT_TYPES.RANDOM)
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    const loadData = async () => {
      try {
        const response = await Promise.all([
          getTextContent({ filename: 'text_data.json' }),
          getTextContent({ filename: 'random_text_data.json' })
        ])

        if (mounted.current) {
          setTextData(response[0].data)
          setRandomTextData(response[1].data)
          setContent(response[1].data)
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

  useEffect(() => {
    if (!countries.includes(country) || !mounted.current) {
      return
    }

    if (country === 'Armenia') {
      if (contentType === CONTENT_TYPES.RANDOM) {
        setContent(textData)
        setContentType(CONTENT_TYPES.REAL)
      }
    } else {
      if (contentType === CONTENT_TYPES.REAL) {
        setContent(randomTextData)
        setContentType(CONTENT_TYPES.RANDOM)
      }
    }
  }, [country, contentType, textData, randomTextData])

  const handleSelectCountry = (e) => {
    const { value } = e.target
    setCountry(value)
  }

  return (
    <ProfileCenteredComponent
      country={country}
      countries={countries}
      state={state}
      textData={content}
      donutData={donutChartData}
      barData={{ options, labels, data }}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default ProfileCentered
