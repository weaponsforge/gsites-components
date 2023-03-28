import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CircularProgress from '@mui/material/CircularProgress'

function AlertDialog ({
  isOpen = false,
  loading = false,
  disabled = false,
  dialogTitle = 'Title',
  dialogText = 'Dialog content text',
  buttonConfirmLabel = 'Ok',
  buttonCancelLabel = 'Cancel',
  cancelCallback,
  confirmCallback
}) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = () => {
    if (cancelCallback) {
      cancelCallback()
    } else {
      setOpen(false)
    }
  }

  const handleConfirm = () => {
    if (confirmCallback) {
      confirmCallback()
    } else {
      setOpen(false)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle>
        {dialogTitle}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {dialogText}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          disableElevation
          onClick={handleClose}
          disabled={disabled || loading}
        >
          {buttonCancelLabel}
        </Button>

        <Button
          disableElevation
          variant='contained'
          onClick={handleConfirm}
          disabled={disabled || loading}
        >
          {(loading)
            ? <CircularProgress size={24} />
            : buttonConfirmLabel
          }
        </Button>
      </DialogActions>
    </Dialog>
  )
}

AlertDialog.propTypes = {
  isOpen: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  dialogTitle: PropTypes.string,
  dialogText: PropTypes.string,
  buttonConfirmLabel: PropTypes.string,
  buttonCancelLabel: PropTypes.string,
  cancelCallback: PropTypes.func,
  confirmCallback: PropTypes.func
}

export default AlertDialog
