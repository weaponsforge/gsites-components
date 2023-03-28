import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'

function LoadingIndicator ({
  size = 24,
  loadingLabel = 'Loading...'
}) {
  return (
    <div style={{ width: '100%', minHeight: '300px', display: 'grid', placeContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{loadingLabel}</span>&nbsp;&nbsp;&nbsp;
        <CircularProgress size={size} />
      </div>
    </div>
  )
}

LoadingIndicator.propTypes = {
  size: PropTypes.number,
  loadingLabel: PropTypes.string
}

export default LoadingIndicator
