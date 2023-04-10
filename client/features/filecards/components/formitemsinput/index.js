import { useState, useEffect, useRef, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

import FileUploadSelector from '@/components/common/ui/fileuploadselector'

import usePictureFile from '../../hooks/usepicturefile'
import { cardReceived, cardPictureReceived } from '@/store/cards/cardSlice'

import forminputlabels from '../../constants/forminputlabels.json'
import MIME_TYPES_DEF from '../../constants/mimetypes.json'
import { getMimeSelectOptionBy } from '../../utils/mimetypes'

function FormItemsInput ({
  handleSubmit,
  card,
  disabled = false
}) {
  const [fileUrl, setFileUrl] = useState('***')
  const [mimeType, setMimeType] = useState(null)
  const { pictureImageFile, setPictureFileName } = usePictureFile()
  const formRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (card !== null && fileUrl === '***') {
      setFileUrl(card?.picture_url ?? '')
    }
  }, [card, fileUrl])

  useEffect(() => {
    if (mimeType === null) {
      const mime = (!card)
        ? MIME_TYPES_DEF[0]
        : getMimeSelectOptionBy({ mimeType: card.mime_type })
      setMimeType(mime)
    }
  }, [mimeType, card])

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
          switch (item.id) {
          case 'picture_url':
            return <TextField
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
          case 'mime_type':
            return <Autocomplete
              key={index}
              disablePortal
              id="mime_type"
              size="small"
              disabled={disabled}
              sx={{ width: 300 }}
              options={MIME_TYPES_DEF}
              value={mimeType}
              onChange={(e, newValue) => setMimeType(newValue)}
              getOptionLabel={(option) => option.LABEL}
              renderInput={(params) =>
                <TextField {...params} label="File Type" />
              }
            />
          default:
            return <TextField
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
          }
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
