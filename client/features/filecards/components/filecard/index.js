import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import FullBox from '@/components/common/layout/fullbox'

function FileCard () {
  const container = { width: '100vw', height: '100vh', overflowY: 'hidden' }

  return (
    <FullBox sx={container}>
      <Box sx={{
        '& .MuiCard-root:hover': {
          boxShadow: '5px 0px 20px rgba(0, 0, 0, .2)'
        }
      }}>
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
            image="/images/cards/scenery.jpg"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Scenery
            </Typography>

            <Typography variant="body2" color="text.secondary">
              This is a sample short paragraph.
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" variant="contained" sx={{ width: '50%' }}>
              Download
            </Button>

            <Button size="small" variant="contained" sx={{ width: '50%' }}>
              Go
            </Button>
          </CardActions>
        </Card>
      </Box>
    </FullBox>
  )
}

export default FileCard