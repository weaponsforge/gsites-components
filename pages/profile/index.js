import { useEffect, useState, useRef } from 'react'
import ProfileComponent from '@/components/profile'
import donutChartData from '@/data/donut_data'
import countries from '@/data/countries'
import { options, labels, data } from '@/data/bar_data'
import { useFetchText } from '@/hooks/usefetchtext'

function Profile () {
  const [country, setCountry] = useState('')
  const { data: textData, loading, error } = useFetchText({ filename: 'random_text_data.json' })
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

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
      state={{ loading: loading, error: error }}
      textData={textData}
      donutData={donutChartData}
      barData={{ options, labels, data }}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default Profile
