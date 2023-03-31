import { useSelector } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Section from '@/components/common/layout/section'
import CountryButton from '@/domain/profile/countrybutton'

function CountryList ({
  countries,
  handleSelectCountry
}) {
  const notification = useSelector(state => state.app.notification)

  return (
    <Section>
      <Box sx={{
        a: {
          textDecoration: 'none'
        }
      }}>
        {countries.map((country, index) => (
          <Link href={`/profiles/${country.toLowerCase()}`} key={index} passHref>
            <CountryButton
              variant='text'
              disableElevation
              value={country}
              onClick={handleSelectCountry}
              disabled={notification !== ''}
            >
              {country}
            </CountryButton>
          </Link>
        ))}
      </Box>
    </Section>
  )
}

CountryList.propTypes = {
  countries: PropTypes.array,
  handleSelectCountry: PropTypes.func
}

export default CountryList
