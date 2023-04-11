import Image from 'next/image'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'

import AppCard from '@/components/common/ui/appcard'
import styles from '@/styles/Common.module.css'
import SmartNotification from '@/components/common/ui/smartnotification'

function LoginComponent ({ signIn, loading = false }) {
  return (
    <div className={styles.wrapper}>
      <Container maxWidth='xs' sx={{
        margin: 'auto',
        marginTop: (theme) => theme.spacing(10),
        marginBottom: '16px',
        '& h1': {
          marginTop: '8px'
        }
      }}>
        <AppCard>
          <Image
            src="../images/icons/icon-cms.png"
            alt="13"
            width={64}
            height={64}
            priority
          />

          <h1>
            Login!
          </h1>

          <form onSubmit={signIn}>
            <TextField
              id='email'
              label='Email'
              placeholder='Enter your email'
              disabled={loading}
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />

            <TextField
              id='password'
              label='password'
              placeholder='Enter your password'
              type='password'
              disabled={loading}
              size='password'
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />

            <Button
              variant='contained'
              disableElevation size='large'
              type="submit"
              disabled={loading}
              sx={{ width: '100%' }}
            >
              Login
            </Button>

            <SmartNotification />
          </form>
        </AppCard>
      </Container>
    </div>
  )
}

LoginComponent.propTypes = {
  signIn: PropTypes.func,
  loading: PropTypes.bool
}

export default LoginComponent
