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
import useAttachFile from '../../hooks/useattachfile'
import { cardReceived, cardPictureReceived, cardFileReceived } from '@/store/cards/cardSlice'

import forminputlabels from '../../constants/forminputlabels.json'
import MIME_TYPES_DEF from '../../constants/mimetypes.json'
import { FILE_INPUT_ID } from '../../hooks/useattachfile'
import { getMimeSelectOptionBy } from '../../utils/mimetypes'

function FormItemsInput ({
  handleSubmit,
  card,
  disabled = false
}) {
  const [pictureFileUrl, setPictureFileUrl] = useState('***')
  const [fileUrl, setFileUrl] = useState('***')
  const [mimeType, setMimeType] = useState(null)

  const { pictureImageFile, setPictureFileName } = usePictureFile()
  const { fileObject, setFileName } = useAttachFile()

  const formRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (card !== null && pictureFileUrl === '***' && fileUrl === '***') {
      setPictureFileUrl(card?.picture_url ?? '')
      setFileUrl(card?.download_url ?? '')
    }
  }, [card, pictureFileUrl, fileUrl])

  useEffect(() => {
    if (mimeType === null) {
      const mime = (!card)
        ? MIME_TYPES_DEF[0]
        : getMimeSelectOptionBy({ mimeType: card.mime_type })
      setMimeType(mime)
    }
  }, [mimeType, card])

  const pictureUrlLabel = useMemo(() => {
    if (pictureFileUrl !== '') {
      // File URL
      return pictureFileUrl
    } else {
      // File name
      return (pictureImageFile !== null && pictureImageFile !== undefined)
        ? pictureImageFile.name
        : ''
    }
  }, [pictureImageFile, pictureFileUrl])

  const fileUrlLabel = useMemo(() => {
    if (fileUrl !== '') {
      // File URL
      return fileUrl
    } else {
      // File name
      return (fileObject !== null && fileObject !== undefined)
        ? fileObject.name
        : ''
    }
  }, [fileObject, fileUrl])

  const handlePreview = () => {
    const url = (pictureFileUrl.includes('http://')) || (pictureFileUrl.includes('https://'))
      ? pictureFileUrl
      : ''

    const urlFile = (fileUrl.includes('http://')) || (fileUrl.includes('https://'))
      ? fileUrl
      : ''

    const cardObj = forminputlabels
      .reduce((list, item) => [...list, item.id], [])
      .reduce((carditems, key) => ({ ...carditems, [key]: formRef.current[key].value }), {})

    dispatch(cardReceived({
      ...cardObj,
      id: card?.id ?? '-',
      picture_url: url,
      download_url: urlFile
    }))
  }

  const setPictureFileURLText = (e) => {
    if (!e.target) {
      return
    } else {
      setPictureFileUrl(e.target.value)

      if (pictureImageFile !== null) {
        setPictureFileName('')
      }
    }
  }

  const setFileURLText = (e) => {
    if (!e.target) {
      return
    } else {
      setFileUrl(e.target.value)

      if (fileObject !== null) {
        setFileName('')
      }
    }
  }

  const setPictureData = (fileData) => {
    setPictureFileUrl('')

    dispatch(cardPictureReceived((fileData)
      ? fileData[0].name
      : ''
    ))
  }

  const setFileData = (fileData) => {
    setFileUrl('')

    dispatch(cardFileReceived((fileData)
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
              onChange={setPictureFileURLText}
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
                    fileSelectedCallback={setPictureData}
                  />
              }}
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />
          case 'download_url':
            return <TextField
              key={index}
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              disabled={disabled}
              rows={5}
              onChange={setFileURLText}
              value={fileUrlLabel}
              size="small"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                endAdornment:
                  <FileUploadSelector
                    file={fileObject}
                    fileSelectedCallback={setFileData}
                    inputDomID={FILE_INPUT_ID}
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
