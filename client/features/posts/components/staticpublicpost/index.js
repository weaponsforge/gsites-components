import PropTypes from 'prop-types'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CountryList from '../layout/countrylist'
import SmartNotification from '@/components/common/ui/smartnotification'

import countries from '@/data/countries'
import styles from './styles'

function StaticPublicPostComponent ({
  country,
  post,
  handleSelectCountry
}) {
  return (
    <Container maxWidth='lg'>
      <Grid container sx={styles.container}>
        <Grid item xs={12} sx={{ marginBottom: '48px' }}>
          <Typography variant="h3">
              Climate Profile
            {country !== '' && ` - ${country}`}
          </Typography>

          <CountryList
            countries={countries}
            handleSelectCountry={handleSelectCountry}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <div dangerouslySetInnerHTML={{ __html: post?.content }} style={{ minHeight: '300px' }}  />
        </Grid>

        <SmartNotification />
      </Grid>
    </Container>
  )
}

StaticPublicPostComponent.propTypes = {
  country: PropTypes.string,
  countries: PropTypes.array,
  handleSelectCountry: PropTypes.func,
  post: PropTypes.object
}

export default StaticPublicPostComponent
