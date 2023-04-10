import { useState, useEffect, useRef, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

import FileUploadSelector from '@/components/common/ui/fileuploadselector'

import { cardReceived, cardPictureReceived } from '@/store/cards/cardSlice'
import forminputlabels from '../../constants/forminputlabels.json'
import usePictureFile from '../../hooks/usepicturefile'

function FormItemsInput ({
  handleSubmit,
  card,
  disabled = false
}) {
  const [fileUrl, setFileUrl] = useState('***')
  const { pictureImageFile, setPictureFileName } = usePictureFile()
  const formRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (card !== null && fileUrl === '***') {
      setFileUrl(card?.picture_url ?? '')
    }
  }, [card, fileUrl])

  const pictureUrlLabel = useMemo(() => {
    if (fileUrl !== '') {
      // File URL
      return fileUrl
    } else {
      // File name
      return (pictureImageFile !== null && pictureImageFile !== undefined)
        ? pictureImageFile.name
        : ''
    }
  }, [pictureImageFile, fileUrl])

  const handlePreview = () => {
    const url = (fileUrl.includes('http://')) || (fileUrl.includes('https://'))
      ? fileUrl
      : ''

    const cardObj = forminputlabels
      .reduce((list, item) => [...list, item.id], [])
      .reduce((carditems, key) => ({ ...carditems, [key]: formRef.current[key].value }), {})

    dispatch(cardReceived({ ...cardObj, id: card?.id ?? '-', picture_url: url }))
  }

  const setFileURLText = (e) => {
    if (!e.target) {
      return
    } else {
      setFileUrl(e.target.value)
      handlePreview()

      if (pictureImageFile !== null) {
        setPictureFileName('')
      }
    }
  }

  const setFileData = (fileData) => {
    setFileUrl('')

    dispatch(cardPictureReceived((fileData)
      ? fileData[0].name
      : ''
    ))
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
      <form onSubmit={handleSubmit} ref={formRef}>
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
                    file={pictureImageFile}
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
