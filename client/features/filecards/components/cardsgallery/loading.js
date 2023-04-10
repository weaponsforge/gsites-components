import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

import styles from './styles'

function CardsGalleryLoading () {
  return (
    <Box>
      <Grid container sx={styles.container}></Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 12, md: 16 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Skeleton variant="rounded" width={220} height={300} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CardsGalleryLoading
