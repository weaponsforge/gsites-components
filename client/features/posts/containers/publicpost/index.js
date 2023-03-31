import { useState } from 'react'

import useFetchPublicPost from '../../hooks/usefetchpublicpost'

import PublicPostComponent from '../../components/publicpost'
import countries from '@/data/countries'

function PublicPost () {
  const [country, setCountry] = useState(countries[1])
  useFetchPublicPost(country.toLowerCase())

  const handleSelectCountry = (e) => {
    const { value } = e.target
    const countryValue = value?.toLowerCase()

    if (countryValue) {
      setCountry(value)
    }
  }

  return (
    <PublicPostComponent
      country={country}
      countries={countries}
      handleSelectCountry={handleSelectCountry}
    />
  )
}

export default PublicPost