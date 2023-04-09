import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function CardPreview () {
  const card = useSelector(state => state.cards.card)

  return (
    <Box sx={{
      margin: '0px 24px 0px 0px',
      '& .MuiCard-root:hover': {
        boxShadow: '5px 0px 20px rgba(0, 0, 0, .2)'
      }
    }}>
      {(card !== null) &&
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
            image="/images/cards/scenery.jpg"
          />

          <CardContent  >
            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
              {card?.title ?? 'Title'}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              {card?.subtitle ?? 'Subtitle Text'}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" variant="contained" disableElevation>
              Download
            </Button>

            <Button size="small" variant="contained" disableElevation>
              Go
            </Button>
          </CardActions>
        </Card>
      }
    </Box>
  )
}

export default CardPreview