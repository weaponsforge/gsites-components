import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import ProfileTabsComponent from '@/components/profiletabs'
import donutChartData from '@/data/donut_data'
import { options, labels, data } from '@/data/bar_data'
import { capitalizeFirstLetter } from '@/utils/text'
import { useFetchText } from '@/hooks/usefetchtext'

function ProfileTabs () {
  const [country, setCountry] = useState('')
  const [localError, setLocalError] = useState('')
  const { data: textData, loading, error } = useFetchText({ filename: 'random_text_data.json' })
  const router = useRouter()
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    if (router.isReady && mounted.current) {
      const cntry = router.query.country

      if (cntry) {
        setCountry(capitalizeFirstLetter(cntry))
      } else {
        setLocalError('Country is not defined.')
      }
    }

    return () => {
      mounted.current = false
    }
  }, [router.isReady, router.query])

  return (
    <ProfileTabsComponent
      country={country}
      state={{ loading: loading, error: error || localError }}
      textData={textData}
      donutData={donutChartData}
      barData={{ options, labels, data }}
    />
  )
}

export default ProfileTabs
