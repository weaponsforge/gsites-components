import { useEffect, useState } from 'react'
import ProfileCenteredComponent from '@/components/profile-centered'
import donutChartData from '@/data/donut_data'
import countries from '@/data/countries'
import { options, labels, data } from '@/data/bar_data'
import { getTextContent } from '@/services/textcontent'

const CONTENT_TYPES = {
  RANDOM: 'random',
  REAL: 'real'
}

function ProfileCentered () {
  const [country, setCountry] = useState('')
  const [content, setContent] = useState([])
  const [textData, setTextData] = useState([])
  const [randomTextData, setRandomTextData] = useState([])
  const [contentType, setContentType] = useState(CONTENT_TYPES.RANDOM)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await Promise.all([
          getTextContent({ filename: 'text_data.json' }),
          getTextContent({ filename: 'random_text_data.json' })
        ])

        setTextData(response[0].data)
        setRandomTextData(response[1].data)
        setContent(response[1].data)
      } catch (err) {
        // console.log(err.message)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    if (!countries.includes(country)) {
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
      textData={content}
      donutData={donutChartData}
      barData={{ options, labels, data }}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default ProfileCentered
