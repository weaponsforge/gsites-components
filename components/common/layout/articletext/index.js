import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FullBox from '@/components/common/layout/fullbox'

function ArticleText ({
  title = 'Title',
  content = 'Text'
}) {
  return (
    <FullBox sx={{ marginTop: '16px', marginBottom: '16px' }}>
      <Box>
        <Typography variant='h4'>
          {title}
        </Typography>
      </Box>

      <Box sx={{ marginTop: '24px' }}>
        <Typography variant='body2' sx={{ whiteSpace: 'pre-line' }}>
          {content}
        </Typography>
      </Box>
    </FullBox>
  )
}

ArticleText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default ArticleText
