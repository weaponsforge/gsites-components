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
    <FullBox sx={{ width: '100vw', height: '100vh', overflowY: 'hidden' }}>
      <Box sx={{
        '& .MuiCard-root:hover': {
          boxShadow: '5px 0px 20px rgba(0, 0, 0, .2)'
        }
      }}>
        {(status === ADAPTER_STATES.PENDING && pageInitialized) &&
          <div>
            <CircularProgress size={32} color="primary" />
          </div>
        }

        {(status === ADAPTER_STATES.IDLE && pageInitialized) &&
         <Card sx={{
           width: '345',
           height: '320',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'space-between',
           transition: 'box-shadow 0.5s'
         }}>
           <CardMedia
             sx={{ height: 140 }}
             component="img"
             alt="sample icon"
             image={card?.picture_url ?? '/images/cards/scenery.jpg'}
           />

           <CardContent>
             <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
               {card?.title ?? 'Title'}
             </Typography>

             <Typography variant="body2" color="text.secondary"
               sx={{
                 textAlign: 'center',
                 a: {
                   color: (theme) => theme.palette.primary.main,
                   textDecoration: 'none'
                 },
                 'a:hover': {
                   textDecoration: 'underline'
                 },
                 'a:visited': {
                   color: (theme) => theme.palette.primary.secondary,
                   textDecoration: 'none'
                 }
               }}
             >
               {card?.subtitle ?? 'Subtitle'}
             </Typography>
           </CardContent>

           <CardActions>
             <Button
               size="small"
               variant="outlined"
               disableElevation
               onClick={downloadFile}
               disabled={loading}
               sx={{ width: '50%' }}
             >
               {(loading)
                 ? <CircularProgress size={24} />
                 : <DownloadForOfflineTwoToneIcon />
               }
             </Button>

             <Button
               size="small"
               variant="outlined"
               disableElevation
               onClick={previewFile}
               disabled={loading}
               sx={{ width: '50%' }}
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