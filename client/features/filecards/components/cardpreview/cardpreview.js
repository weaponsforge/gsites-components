import { useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import DownloadForOfflineTwoToneIcon from '@mui/icons-material/DownloadForOfflineTwoTone'
import CircularProgress from '@mui/material/CircularProgress'

function CardPreviewComponent ({
  card,
  loading,
  pictureImage,
  cardSubTitle,
  isDisabled,
  downloadFile
}) {
  const [imageLoaded, setImageLoaded] = useState(false)

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
        width: {
          xs: '100%',
          sm: '220px'
        },
        height: {
          xs: '300',
          sm: '300px'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'box-shadow 0.5s',
        margin: 'auto',
        '& button': {
          width: '50%'
        },
        '& h5': {
          textAlign: 'center'
        },
        '& img': {
          border: 'none'
        }
      }}>
        <CardMedia
          sx={{ height: 150 }}
          alt="sample icon"
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={pictureImage}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
              fill
              alt="Thumbnail Image"
              style={{
                display: 'block',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '100%',
                objectFit: 'cover',
                position: 'absolute'
              }}
            />

            {(!imageLoaded) &&
            <div
              style={{
                width: '100%',
                height: '150px',
                margin: 'auto',
                display: 'grid',
                placeContent: 'center'
              }}
            >
              <CircularProgress size={24} />
            </div>
            }
          </div>

        </CardMedia>

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

CardPreviewComponent.propTypes = {
  card: PropTypes.object,
  loading: PropTypes.bool,
  pictureImage: PropTypes.string,
  cardSubTitle: PropTypes.object,
  isDisabled: PropTypes.bool,
  downloadFile: PropTypes.func
}

export default CardPreviewComponent