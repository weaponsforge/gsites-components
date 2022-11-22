import Section from '@/components/common/layout/section'
import CountryButton from '@/domain/profile/countrybutton'

function CountryList ({
  countries,
  handleSelectCountry
}) {
  return (
    <Section maxWidth='lg'>
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

export default CountryList
