import PropTypes from 'prop-types'
import Section from '@/components/common/layout/section'
import CountryButton from '@/domain/profile/countrybutton'

function CountryList ({
  countries,
  handleSelectCountry
}) {
  return (
    <Section>
      {countries.map((country, index) => (
        <CountryButton
          variant='text'
          disableElevation
          key={index}
          value={country}
          onClick={handleSelectCountry}
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
