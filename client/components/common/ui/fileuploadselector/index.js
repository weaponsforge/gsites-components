import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone'

function FileUploadSelector ({
  fileSelectedCallback,
  file = null
}) {
  const [localfile, setFile] = useState(file)
  const fileRef = useRef()

  useEffect(() => {
    setFile(file)
  }, [file])

  useEffect(() => {
    if (localfile === null) {
      // Reset the raw <input> localfile value
      fileRef.current.value = null
    }
  }, [localfile])

  const clearFile = (e) => {
    e.preventDefault()
    setFile(null)

    if (fileSelectedCallback) {
      fileSelectedCallback(null)
    }
  }

  const setSelectedFile = async (e) => {
    setFile(e.target.files)

    if (fileSelectedCallback) {
      fileSelectedCallback(e.target.files)
    }
  }

  return (
    <Box>
      <Button
        disableElevation
        component="label"
        onClick={(e) => {
          if (localfile !== null) {
            clearFile(e)
          }
        }}
      >
        {(localfile !== null)
          ? <CancelTwoToneIcon />
          : <SearchTwoToneIcon />
        }

        <Box sx={{ height: '0px', width: '0px', overflow: 'overlay' }}>
          <input
            type="file"
            id="picturefile"
            multiple
            hidden
            ref={fileRef}
            accept={'.jpg, .jpeg, .png, image/*'}
            name='fileforupload'
            onChange={setSelectedFile}
            style={{ border: '1px solid' }}
          />
        </Box>
      </Button>
    </Box>
  )
}

FileUploadSelector.propTypes = {
  fileSelectedCallback: PropTypes.func,
  file: PropTypes.object
}

export default FileUploadSelector