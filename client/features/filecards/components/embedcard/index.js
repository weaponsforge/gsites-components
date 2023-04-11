import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { _getPublicCardById } from '@/store/cards/cardThunks'
import { ADAPTER_STATES } from '@/store/constants'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import DownloadForOfflineTwoToneIcon from '@mui/icons-material/DownloadForOfflineTwoTone'
import CircularProgress from '@mui/material/CircularProgress'

import FullBox from '@/components/common/layout/fullbox'

import useDownloadFile from '../../hooks/usedownloafile'
import styles from './styles'

function EmbedCardComponent () {
  const [fileUrl, setFileUrl] = useState(null)
  const [pageInitialized, setInitialized] = useState(false)

  const { card, status } = useSelector(state => state.cards)
  const dispatch = useDispatch()
  const router = useRouter()

  const { loading } = useDownloadFile({ fileUrl })

  useEffect(() => {
    if (router.isReady) {
      const cardId = router.query.id

      if (cardId) {
        dispatch(_getPublicCardById(cardId))
      }
    }
  }, [dispatch, router.isReady, router.query])

  useEffect(() => {
    if (!loading) {
      setFileUrl(null)
    }
  }, [loading])

  useEffect(() => {
    if (status === ADAPTER_STATES.PENDING) {
      setInitialized(true)
    }
  }, [status])

  const previewFile = () => {
    window.open(card.download_url, '_blank')
  }

  const downloadFile = () => {
    setFileUrl(card?.download_url)
  }

  return (
    <FullBox sx={styles.container}>
      <Box sx={styles.subContainer}>
        {(status === ADAPTER_STATES.PENDING && pageInitialized) &&
          <div className="loadingspinner">
            <CircularProgress size={32} color="primary" />
          </div>
        }

        {(status === ADAPTER_STATES.IDLE && pageInitialized) &&
         <Card sx={styles.card}>
           <CardMedia
             sx={{ height: '60%' }}
             component="img"
             alt="sample icon"
             image={card?.picture_url ?? '/images/cards/scenery.jpg'}
           />

           <CardContent sx={{ height: '18%' }}>
             <Typography gutterBottom variant="h6" component="div"
               sx={{
                 textAlign: 'center',
                 // fontSize: '3.5vh',
                 fontSize: '4.5vh',
                 lineHeight: '4.5vh',
                 marginBottom: 0
               }}
             >
               {card?.title ?? 'Title'}
             </Typography>

             <Typography variant="body2" color="text.secondary" sx={styles.subTitle}>
               {card?.subtitle ?? 'Subtitle'}
             </Typography>
           </CardContent>

           <CardActions sx={{ height: '22%' }}>
             <Button
               size="small"
               variant="outlined"
               disableElevation
               onClick={downloadFile}
               disabled={loading}
               sx={styles.button}
             >
               {(loading)
                 ? <CircularProgress size="6vh" />
                 : <DownloadForOfflineTwoToneIcon sx={{ fontSize: '5vh' }}  />
               }
             </Button>

             <Button
               size="small"
               variant="outlined"
               disableElevation
               onClick={previewFile}
               disabled={loading}
               sx={styles.button}
             >
                View
             </Button>
           </CardActions>
         </Card>
        }

      </Box>
    </FullBox>
  )
}

export default EmbedCardComponent