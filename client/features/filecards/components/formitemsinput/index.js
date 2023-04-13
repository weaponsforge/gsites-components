import { useState, useEffect, useRef, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import usePictureFile from '../../hooks/usepicturefile'
import useAttachFile from '../../hooks/useattachfile'
import { cardReceived } from '@/store/cards/cardSlice'

import forminputlabels from '../../constants/forminputlabels.json'
import { getMimeSelectOptionBy, getAllowedFileTypes } from '../../utils/mimetypes'

import FormItemsInputComponent from './formitemsinput'
import { MESSAGE_SEVERITY, notificationReceived } from '@/store/app/appSlice'

function FormItemsInput ({
  handleSubmit,
  card,
  disabled = false
}) {
  const [pictureFileUrl, setPictureFileUrl] = useState('***')
  const [fileUrl, setFileUrl] = useState('***')
  const [mimeType, setMimeType] = useState(undefined)

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
    if (mimeType === undefined) {
      const mime = (!card)
        ? null
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

      if (mimeType !== '') {
        setMimeType(null)
      }
    }
  }

  const setPictureData = (fileData) => {
    setPictureFileUrl('')

    setPictureFileName((fileData)
      ? fileData[0].name
      : '')
  }

  const setFileData = (fileData) => {
    if (fileData) {
      const mime = getMimeSelectOptionBy({ mimeType: fileData[0].type })

      if (mime) {
        setFileName(fileData[0].name)
        setMimeType(mime)
        setFileUrl('')
      } else {
        dispatch(notificationReceived({
          notification: 'File type not supported',
          severity: MESSAGE_SEVERITY.WARNING
        }))
      }
    } else {
      setFileName('')
      setMimeType(null)
    }
  }

  return (
    <FormItemsInputComponent
      handleSubmit={handleSubmit}
      card={card}
      disabled={disabled}
      formRef={formRef}
      mimeType={mimeType}
      allowedFiles={getAllowedFileTypes(false)}
      fileUrl={fileUrl}
      fileUrlLabel={fileUrlLabel}
      pictureUrlLabel={pictureUrlLabel}
      fileObject={fileObject}
      pictureImageFile={pictureImageFile}
      setFileData={setFileData}
      setPictureData={setPictureData}
      setPictureFileURLText={setPictureFileURLText}
      setFileURLText={setFileURLText}
      setMimeType={setMimeType}
      handlePreview={handlePreview}
    />
  )
}

FormItemsInput.propTypes = {
  handleSubmit: PropTypes.func,
  card: PropTypes.object,
  disabled: PropTypes.bool
}

export default FormItemsInput
