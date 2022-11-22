
import { useRouter } from 'next/router'
import countries from '@/data/countries'
import CountriesComponent from '@/components/countries'

function Countries () {
  const router = useRouter()

  const handleSelectCountry = (e) => {
    const { value } = e.target

    if (value) {
      router.push({
        pathname: '/profiletabs',
        query: { country: value }
      })
    }
  }

  return (
    <CountriesComponent
      countries={countries}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default Countries
