import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Section from '@/components/common/layout/section'
import CountryButton from '@/domain/profile/countrybutton'

function CountryList ({
  countries,
  handleSelectCountry
}) {
  const notification = useSelector(state => state.app.notification)

  return (
    <Section>
      {countries.map((country, index) => (
        <CountryButton
          variant='text'
          disableElevation
          key={index}
          value={country}
          onClick={handleSelectCountry}
          disabled={notification !== ''}
        >
          {country}
        </CountryButton>
      ))}
    </Section>
  )
}

CountryList.propTypes = {
  countries: PropTypes.array,
  handleSelectCountry: PropTypes.func
}

export default CountryList
