import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/typography'
import FullBox from '@/components/common/layout/fullbox'
import styles from './styles'

function SubContentText ({
  title = 'Title',
  content = 'Text'
}) {
  return (
    <FullBox sx={styles.container}>
      <Box>
        <Typography variant='h5'>
          {title}
        </Typography>
      </Box>

      <Box sx={{ marginTop: '8px' }}>
        <Typography variant='body2'>
          {content}
        </Typography>
      </Box>
    </FullBox>
  )
}

SubContentText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default SubContentText
