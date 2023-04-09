import { useState, useEffect, useRef, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

import FileUploadSelector from '@/components/common/ui/fileuploadselector'

import { cardReceived } from '@/store/cards/cardSlice'
import forminputlabels from '../../constants/forminputlabels.json'

function FormItemsInput ({
  handleSubmit,
  card,
  disabled = false
}) {
  const [file, setFile] = useState(undefined)
  const [fileUrl, setFileUrl] = useState('')
  const formRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (card !== null) {
      setFileUrl(card?.picture_url ?? '')
    }
  }, [card])

  const pictureUrlLabel = useMemo(() => {
    if (fileUrl !== '') {
      // File URL
      return fileUrl
    } else {
      // File name
      return (file !== null && file !== undefined)
        ? (file.length > 0)
          ? file[0].name
          : ''
        : ''
    }
  }, [file, fileUrl])

  const handlePreview = () => {
    const cardObj = forminputlabels
      .reduce((list, item) => [...list, item.id], [])
      .reduce((carditems, key) => ({ ...carditems, [key]: formRef.current[key].value }), {})

    dispatch(cardReceived({ ...cardObj, id: card?.id ?? '-' }))
  }

  const setFileURLText = (e) => {
    if (!e.target) {
      return
    } else {
      setFileUrl(e.target.value)

      if (file !== null) {
        setFile(null)
      }
    }
  }

  const setFileData = (fileData) => {
    setFile(fileData)
    setFileUrl('')
  }

  return (
    <Box
      sx={{
        marginTop: (theme) => theme.spacing(3),
        '& .MuiTextField-root': {
          marginBottom: (theme) => theme.spacing(3)
        }
      }}
    >
      <form onSubmit={(e) => handleSubmit(e, file)} ref={formRef}>
        {forminputlabels.map((item, index) => {
          return (item.id !== 'picture_url')
            ? <TextField
              key={index}
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              disabled={disabled}
              multiline={(item.id === 'description')}
              rows={5}
              defaultValue={card?.[item.id] ?? ''}
              size="small"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />
            : <TextField
              key={index}
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              disabled={disabled}
              rows={5}
              onChange={setFileURLText}
              value={pictureUrlLabel}
              size="small"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                endAdornment:
                  <FileUploadSelector
                    file={file}
                    fileSelectedCallback={setFileData}
                  />
              }}
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />
        })}

        <Divider />

        <Box
          sx={{
            float: 'right',
            marginTop: '32px',
            '& button': {
              width: '100px',
              marginLeft: '8px'
            }
          }}
        >
          <Button size="large" onClick={handlePreview}>
            Preview
          </Button>
          <Button size="large" disableElevation variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  )
}

FormItemsInput.propTypes = {
  handleSubmit: PropTypes.func,
  card: PropTypes.object,
  disabled: PropTypes.bool
}

export default FormItemsInput
