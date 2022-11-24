import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

function Notification ({
  isOpen,
  message,
  severity,
  closeHandlerCB = () => {}
}) {
  const [open, setOpen] = useState(isOpen)

  // Listener for isOpen
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    setOpen(false)
    closeHandlerCB()
  }

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity={severity ?? 'success'} sx={{ borderRadius: '8px' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

Notification.propTypes = {
  /** Flag to display the UI from the calling component */
  isOpen: PropTypes.bool,
  /** String message to display */
  message: PropTypes.string,
  /** Color code type: error|success|info|info */
  severity: PropTypes.string,
  /** Callback function after closing the Notification UI */
  closeHandlerCB: PropTypes.func
}

export default Notification
