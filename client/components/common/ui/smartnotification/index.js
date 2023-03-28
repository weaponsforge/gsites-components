import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { useSelector, useDispatch } from 'react-redux'
import { resetMessage } from '@/store/app/appSlice'

/**
 * A notification (Snackbar and Alert) that displays the global app.notification store message.
 * Resets the global notification on close with its onClose() method.
 */
function SmartNotification () {
  const dispatch = useDispatch()
  const { notification, severity } = useSelector(state => state.app)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const isOpen = (notification !== '')

    if (open !== isOpen) {
      setOpen(isOpen)
    }
  }, [notification, open])

  return (
    <div>
      {open &&
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => dispatch(resetMessage())}
        sx={{
          minWidth: '300px',
          '& .MuiPaper-root': {
            width: '100%'
          }
        }}
      >
        <Alert severity={severity ?? 'success'} variant='filled' elevation={6}>
          {notification}
        </Alert>
      </Snackbar>}
    </div>
  )
}

export default SmartNotification
