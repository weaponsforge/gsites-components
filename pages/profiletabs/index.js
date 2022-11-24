import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import ProfileTabsComponent from '@/components/profiletabs'
import donutChartData from '@/data/donut_data'
import { options, labels, data } from '@/data/bar_data'
import { capitalizeFirstLetter } from '@/utils/text'
import { getTextContent } from '@/services/textcontent'

const defaultState = { loading: true, msg: '' }

function ProfileTabs () {
  const [country, setCountry] = useState('')
  const [textData, setTextData] = useState([])
  const [state, setState] = useState(defaultState)
  const router = useRouter()
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

    if (router.isReady) {
      const cntry = router.query.country

      if (cntry) {
        setCountry(capitalizeFirstLetter(cntry))
      } else {
        setState(prev => ({ ...prev, msg: 'Country is not defined.' }))
      }

      loadData()
    }

    return () => {
      mounted.current = false
    }
  }, [router.isReady, router.query])

  return (
    <ProfileTabsComponent
      country={country}
      state={state}
      textData={textData}
      donutData={donutChartData}
      barData={{ options, labels, data }}
    />
  )
}

export default ProfileTabs
