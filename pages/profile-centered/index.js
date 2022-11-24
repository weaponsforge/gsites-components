import { useEffect, useState } from 'react'
import ProfileCenteredComponent from '@/components/profile-centered'
import textData from '@/data/text_data'
import randomTextData from '@/data/random_text_data'
import donutChartData from '@/data/donut_data'
import countries from '@/data/countries'
import { options, labels, data } from '@/data/bar_data'

const CONTENT_TYPES = {
  RANDOM: 'random',
  REAL: 'real'
}

function ProfileCentered () {
  const [country, setCountry] = useState('')
  const [content, setContent] = useState(randomTextData)
  const [contentType, setContentType] = useState(CONTENT_TYPES.RANDOM)

  useEffect(() => {
    if (!countries.includes(country)) {
      return
    }

    if (country === 'Armenia') {
      setContent(textData)
      setContentType(CONTENT_TYPES.REAL)
    } else {
      if (contentType === CONTENT_TYPES.REAL) {
        setContent(randomTextData)
        setContentType(CONTENT_TYPES.RANDOM)
      }
    }
  }, [country])

  const handleSelectCountry = (e) => {
    const { value } = e.target
    setCountry(value)
  }

  return (
    <ProfileCenteredComponent
      country={country}
      countries={countries}
      textData={content}
      donutData={donutChartData}
      barData={{ options, labels, data }}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default ProfileCentered
