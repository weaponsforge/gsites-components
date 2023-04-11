import { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SmartNotification from '@/components/common/ui/smartnotification'

import CardPreviewComponent from '../cardpreview/cardpreview'
import CardsGalleryLoading from './loading'

import useDownloadFile from '../../hooks/usedownloafile'
import { _getCardsByCategory } from '@/store/cards/cardThunks'
import { ADAPTER_STATES } from '@/store/constants'

import styles from './styles'

function CardsGallery () {
  const [pageTitle, setPageTitle] = useState('')
  const [selectedUrl, setSelected] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()
  const mounted = useRef(false)

  const { status, entities: cards, ids, error } = useSelector(state => state.cards)
  const { loading } = useDownloadFile({ fileUrl: selectedUrl })

  useEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      setSelected(null)
    }
  }, [loading])

  useEffect(() => {
    if (router.isReady && mounted.current) {
      const category = router.query.category
      const title = router.query?.title ?? ''

      if (category) {
        dispatch(_getCardsByCategory(category))
      }

      setPageTitle(title)
    }
  }, [dispatch, router.isReady, router.query])

  const cardSubTitle = useCallback((website_url, cardSubtitle) => {
    let subtitle = <span>{cardSubtitle ?? ''}</span>

    if (website_url !== '') {
      subtitle = <Link href={website_url} target="_blank">
        {cardSubtitle}
      </Link>
    }

    return subtitle
  }, [])

  return (
    <Container maxWidth='lg'>
      {(status === ADAPTER_STATES.PENDING)
        ? <CardsGalleryLoading />
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
                {ids.map((cardId, index) => (
                  <CardPreviewComponent
                    key={index}
                    card={cards[cardId]}
                    loading={loading && cards[cardId]?.download_url === selectedUrl}
                    pictureImage={cards[cardId].picture_url}
                    cardSubTitle={cardSubTitle(cards[cardId].website_url, cards[cardId].subtitle)}
                    isDisabled={loading && cards[cardId]?.download_url !== selectedUrl}
                    downloadFile={() => setSelected(cards[cardId]?.download_url)}
                  />
                ))}
              </Box>

              <SmartNotification />
            </Box>
      }
    </Container>
  )
}

export default CardsGallery
