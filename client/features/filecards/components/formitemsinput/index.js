import { useState, useEffect, useRef, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import usePictureFile from '../../hooks/usepicturefile'
import useAttachFile from '../../hooks/useattachfile'
import { cardReceived, cardPictureReceived, cardFileReceived } from '@/store/cards/cardSlice'

import forminputlabels from '../../constants/forminputlabels.json'
import MIME_TYPES_DEF from '../../constants/mimetypes.json'
import { getMimeSelectOptionBy } from '../../utils/mimetypes'

import FormItemsInputComponent from './formitemsinput'

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
    <FormItemsInputComponent
      handleSubmit={handleSubmit}
      card={card}
      disabled={disabled}
      formRef={formRef}
      mimeType={mimeType}
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
