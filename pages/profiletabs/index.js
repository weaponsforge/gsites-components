import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ProfileTabsComponent from '@/components/profiletabs'
import donutChartData from '@/data/donut_data'
import countries from '@/data/countries'
import { options, labels, data } from '@/data/bar_data'
import { capitalizeFirstLetter } from '@/utils/text'
import { getTextContent } from '@/services/textcontent'

function ProfileTabs () {
  const router = useRouter()
  const [country, setCountry] = useState('')
  const [textData, setTextData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getTextContent({ filename: 'random_text_data.json' })
        setTextData(response.data)
      } catch (err) {
        // console.log(err.message)
      }
    }

    if (router.isReady) {
      const cntry = router.query.country

      if (cntry) {
        setCountry(capitalizeFirstLetter(cntry))
      } else {
        console.error('country is not defined')
      }

      loadData()
    }
  }, [router.isReady, router.query])

  const handleSelectCountry = (e) => {
    const { value } = e.target
    setCountry(value)
  }

  return (
    <ProfileTabsComponent
      country={country}
      countries={countries}
      textData={textData}
      donutData={donutChartData}
      barData={{ options, labels, data }}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default ProfileTabs
