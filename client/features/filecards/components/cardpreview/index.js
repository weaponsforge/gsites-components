import { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import DownloadForOfflineTwoToneIcon from '@mui/icons-material/DownloadForOfflineTwoTone'
import CircularProgress from '@mui/material/CircularProgress'

import usePictureFile from '../../hooks/usepicturefile'
import { usePromise } from '@/hooks/usepromise'
import { downloadCardFile } from '@/services/cards'
import { MESSAGE_SEVERITY, notificationReceived } from '@/store/app/appSlice'

function CardPreview () {
  const card = useSelector(state => state.cards.card)
  const { pictureImage } = usePictureFile(card?.picture_url)
  const dispatch = useDispatch()

  const [loader, setLoader] = useState(null)
  const { loading, error } = usePromise(loader)

  useEffect(() => {
    if (error !== '') {
      dispatch(notificationReceived({
        notification: error,
        severity: MESSAGE_SEVERITY.WARNING
      }))
    }
  }, [dispatch, error])

  const cardSubTitle = useMemo(() => {
    let subtitle = <span>Subtitle Text</span>

    if (card !== null) {
      subtitle = card?.subtitle ?? ''

      if (card?.website_url !== '') {
        subtitle = <a href={card.website_url}>
          {subtitle}
        </a>
      }
    }

    return subtitle
  }, [card])

  const isDisabled = useMemo(() => {
    if (loading) {
      return true
    } else {
      return (card)
        ? (card?.download_url === '' || !card?.download_url.includes('http'))
        : true
    }
  }, [loading, card])

  const downloadFile = async () => {
    setLoader(downloadCardFile(card?.download_url))
  }

  const previewFile = () => {
    window.open(card.download_url, '_blank')
  }

  return (
    <Box sx={{
      margin: '0px 24px 0px 0px',
      '& .MuiCard-root:hover': {
        boxShadow: '5px 0px 20px rgba(0, 0, 0, .2)'
      }
    }}>
      <Card sx={{
        width: '220',
        height: '300',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'box-shadow 0.5s',
        '& button': {
          width: '50%'
        },
        '& h5': {
          textAlign: 'center'
        }
      }}>
        <CardMedia
          sx={{ height: 150 }}
          component="img"
          alt="sample icon"
          image={pictureImage}
        />

        <CardContent  >
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
            {cardSubTitle}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            variant="outlined"
            disableElevation
            onClick={downloadFile}
            disabled={isDisabled}
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
            disabled={isDisabled}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default CardPreview