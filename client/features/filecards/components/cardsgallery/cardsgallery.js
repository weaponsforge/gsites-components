import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SmartNotification from '@/components/common/ui/smartnotification'

import CardPreviewComponent from '../cardpreview/cardpreview'
import CardsGalleryComponentLoading from './loading'
import { ADAPTER_STATES } from '@/store/constants'

import styles from './styles'

function CardsGalleryComponent ({
  pageTitle,
  cardSubTitle,
  selectedUrl,
  loading,
  mounted,
  setSelected
}) {
  const { status, entities: cards, ids, error } = useSelector(state => state.cards_gallery)

  return (
    <Container maxWidth='lg'>
      {(status === ADAPTER_STATES.PENDING)
        ? <CardsGalleryComponentLoading />
        : (error !== '')
          ? <p>{error}</p>
          : (ids.length === 0 && mounted.current)
            ? <p>There are no Card/s for this category.</p>
            : <Box>
              <Grid container sx={styles.container}>
                <Grid item xs={12} sx={{ marginBottom: '48px' }}>
                  <Typography variant='h5'>
                    {pageTitle}
                  </Typography>
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: 'grid',
                  gap: '24px',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(4, 1fr)'
                  }
                }}
              >
                {Object.values(cards).sort((a, b) => a.title.localeCompare(b.title)).map((card, index) => (
                  <CardPreviewComponent
                    key={index}
                    card={card}
                    loading={loading && card?.download_url === selectedUrl}
                    pictureImage={card.picture_url}
                    cardSubTitle={cardSubTitle(card.website_url, card.subtitle)}
                    isDisabled={(loading)
                      ? (card?.download_url !== selectedUrl)
                      : !card.download_url.includes('http')
                    }
                    downloadFile={() => setSelected(card?.download_url)}
                  />
                ))}
              </Box>

              <SmartNotification />
            </Box>
      }
    </Container>
  )
}

CardsGalleryComponent.propTypes = {
  pageTitle: PropTypes.string,
  cardSubTitle: PropTypes.func,
  selectedUrl: PropTypes.string,
  loading: PropTypes.bool,
  mounted: PropTypes.object,
  setSelected: PropTypes.func
}

export default CardsGalleryComponent
