import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cardFileReceived } from '@/store/cards/cardSlice'

const defaultState = {
  fileSource: null,
  fileObject: null,
  error: ''
}

const FILE_INPUT_ID = 'attachmentfile'

/**
 * Get/set a File Card's attachement document source and File from the
 * FileUploadSelector component's <input type="file" id=FILE_INPUT_ID /> element.
 * @param {String} remoteFileUrl - (Optional) Remote file download URL
 * @returns {Object}
 *    - fileSource: {String} - Picture file image source/download URL
 *    - fileObject: {File} File from the fileSource
 *    - fileError: {String} Error message.
 *    - setFileName: {Function} card store attachmentfilename setter
 */
export default function useAttachFile (remoteFileUrl = undefined) {
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()
  const attachmentFileName = useSelector(state => state.cards.attachmentfilename)

  useEffect(() => {
    const inputFile = document.querySelector(`#${FILE_INPUT_ID}`)

    if (!inputFile) {
      setState(prev => ({ ...prev, error: `<input /> #${FILE_INPUT_ID} not found.` }))
    }
  }, [])

  useEffect(() => {
    let fileSource = null
    let file = null

    if (attachmentFileName !== '') {
      const inputFile = document.querySelector(`#${FILE_INPUT_ID}`)

      if (inputFile) {
        if (inputFile.files.length > 0) {
          fileSource = URL.createObjectURL(inputFile.files[0])
          file = inputFile.files[0]
        }
      }
    }

    setState(prev => ({
      ...prev,
      fileSource: fileSource,
      fileObject: file,
    }))
  }, [attachmentFileName])

  useEffect(() => {
    if (remoteFileUrl !== undefined && remoteFileUrl !== null && remoteFileUrl !== '') {
      setState(prev => ({
        ...prev,
        fileSource: remoteFileUrl,
        fileObject: null
      }))
    }
  }, [remoteFileUrl])

  const setFileName = (fileName = '') => {
    dispatch(cardFileReceived(fileName))
  }

  return {
    fileSource: state.fileSource,
    fileObject: state.fileObject,
    fileError: state.error,
    setFileName
  }
}

export {
  FILE_INPUT_ID
}
