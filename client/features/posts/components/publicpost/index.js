import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import AppCard from '@/components/common/ui/appcard'
import SmartNotification from '@/components/common/ui/smartnotification'

import { ADAPTER_STATES } from '@/store/constants'
import styles from './styles'

function PublicPostComponent () {
  const { post, status } = useSelector(state => state.posts)

  return (
    <Container maxWidth='lg'>
      {(status === ADAPTER_STATES.PENDING)
        ? <AppCard>
            Loading please wait...
        </AppCard>
        : <Grid container sx={styles.container}>
          <Grid item xs={12} sx={{ marginBottom: '48px' }}>
            <h1>Hello, World!</h1>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div dangerouslySetInnerHTML={{ __html: post?.content }} style={{ minHeight: '300px' }}  />
          </Grid>

          <SmartNotification />
        </Grid>
      }
    </Container>
  )
}

PublicPostComponent.propTypes = {
  country: PropTypes.string,
  countries: PropTypes.array,
  handleSelectCountry: PropTypes.func
}

export default PublicPostComponent
