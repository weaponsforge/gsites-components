import PropTypes from 'prop-types'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CountryList from '@/domain/profile/countrylist'

function CountriesComponent ({
  countries,
  handleSelectCountry
}) {
  return (
    <Container maxWidth='lg' sx={{ margin: 'auto', textAlign: 'center' }}>
      <Typography variant='h3'>
        Country Profile
      </Typography>
      <Typography variant='h5' sx={{ marginBottom: '48px' }}>
        Select a country to view its profile
      </Typography>

      <CountryList
        countries={countries}
        handleSelectCountry={handleSelectCountry}
      />
    </Container>
  )
}

CountriesComponent.propTypes = {
  countries: PropTypes.array,
  handleSelectCountry: PropTypes.func
}

export default CountriesComponent
