import Image from 'next/image'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FullBox from '@/components/common/layout/fullbox'

function ArticleText ({
  title = 'Title',
  content = 'Text',
  picture,
  pictureAlt = '',
  pictureSize
}) {
  return (
    <FullBox sx={{ marginTop: '16px', marginBottom: '16px' }}>
      <Box>
        <Typography variant='h4'>
          {title}
        </Typography>
      </Box>

      {picture &&
        <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
          <Image
            src={picture}
            alt={pictureAlt}
            {...pictureSize}
          />
        </Box>
      }

      <Box sx={{ marginTop: '24px' }}>
        <Typography variant='body2' sx={{ whiteSpace: 'pre-line' }}>
          {content}
        </Typography>
      </Box>
    </FullBox>
  )
}

ArticleText.propTypes = {
  /** Article title */
  title: PropTypes.string,
  /** Article long text content */
  content: PropTypes.string,
  /** Picture/image file loaded via nextjs import statement */
  picture: PropTypes.object,
  /** Picture alt text */
  pictureAlt: PropTypes.string,
  /** Should contain width and height keys in Number */
  pictureSize: PropTypes.object
}

export default ArticleText
