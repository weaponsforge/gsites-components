import Link from 'next/link'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function HeaderNav ({ title, subTitle, buttonLink, buttonLabel, disabled }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: (theme) => theme.spacing(3),
        a: {
          textDecoration: 'none'
        }
      }}
    >
      <div>
        <Typography variant='h4'>
          {title}
        </Typography>

        <Typography variant='body'>
          {subTitle}
        </Typography>
      </div>

      <div>
        <Link href={buttonLink} passHref>
          <Button variant='contained' disableElevation size='large' disabled={disabled}>
            {buttonLabel}
          </Button>
        </Link>
      </div>
    </Box>
  )
}

HeaderNav.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLabel: PropTypes.string,
  disabled: PropTypes.bool
}

export default HeaderNav
