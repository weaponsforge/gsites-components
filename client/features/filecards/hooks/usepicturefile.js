import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cardPictureReceived } from '@/store/cards/cardSlice'

const directoryPrefix = (process.env.NEXT_PUBLIC_BASE_PATH !== '')
  ? '../../..'
  : ''

const defaultState = {
  pictureImage: `${directoryPrefix}/images/cards/card-placeholder.png`,
  pictureImageFile: null,
  error: ''
}

export const PICTURE_FILE_INPUT_ID = 'picturefile'

/**
 * Gets a File Card's picture image source from a remote download URL or local Blob URL from an <input type="file" /> element.
 * This hook also sets the selected picture's local Blob url to the redux store, and returns the File data from the <input type="file" /> specified by "inputDomID".
 * This hook works in sync with the <FileUploadSelector /> which has callbacks for retrieving the selected File in it's <input type="file" /> element.
 * @param {String} pictureUrl - (Optional) Picture file download URL
 * @param {String} inputDomID - DOM "id" attribute of an <input type="file" />
 * @returns {Object}
 *    - pictureImage: {String} - Picture file image source (local Blob or remote download URL)
 *    - pictureImageFile: {File} Picture File data
 *    - pictureError: {String} Error message.
 *    - setPictureFileName: {Function} local file name setter which triggers setting the selected picture file data
 */
export default function usePictureFile (
  pictureUrl = undefined,
  inputDomID = PICTURE_FILE_INPUT_ID
) {
  const [state, setState] = useState(defaultState)
  const [pictureFileName, setPictureFileName] = useState(null)
  const pictureLocalURL = useSelector(state => state.cards.picturelocalurl)
  const dispatch = useDispatch()

  const inputFile = document.querySelector(`#${inputDomID}`)

  useEffect(() => {
    // Check if <input /> element exists
    const inputFile = document.querySelector(`#${inputDomID}`)

    if (!inputFile) {
      setState(prev => ({ ...prev, error: `<input /> ${inputDomID} not found.` }))
    }
  }, [dispatch, inputDomID])

  useEffect(() => {
    // Reset values
    if (pictureFileName === null || !state.pictureImageFile || !inputFile) {
      return
    }

    if (pictureFileName === '' && state.pictureImageFile !== null) {
      URL.revokeObjectURL(state.pictureImage)
    }

    if (pictureFileName === '') {
      dispatch(cardPictureReceived(''))
      inputFile.value = ''
    }
  }, [dispatch, inputFile, pictureFileName, state.pictureImage, state.pictureImageFile])

  useEffect(() => {
    // Set the local File and Blob URL
    if (pictureFileName === null || !inputFile) {
      return
    }

    let imgSource = defaultState.pictureImage
    let file = null

    if (pictureFileName !== '') {
      if (inputFile.files.length > 0) {
        imgSource = URL.createObjectURL(inputFile.files[0])
        file = inputFile.files[0]
        dispatch(cardPictureReceived(imgSource))
      }
    }

    setState(prev => ({
      ...prev,
      pictureImage: imgSource,
      pictureImageFile: file,
    }))
  }, [dispatch, pictureFileName, inputDomID, inputFile])

  useEffect(() => {
    if (pictureUrl !== undefined && pictureUrl !== null && pictureUrl !== '') {
      setState(prev => ({
        ...prev,
        pictureImage: pictureUrl,
        pictureImageFile: null
      }))
    }
  }, [pictureUrl])

  useEffect(() => {
    if (!state.pictureImageFile) {
      return
    }

    return () => {
      URL.revokeObjectURL(state.pictureImage)
      setState(defaultState)
    }
  }, [state.pictureImageFile, state.pictureImage])

  // Set the final picture image src, setting the public download URL src as first priority if available.
  // Uses the selected File local Blob URL, or the default picture placeholder if no picture is selected.
  const pictureSrc = useMemo(() => {
    if (pictureUrl !== undefined && pictureUrl !== null && pictureUrl !== '') {
      return pictureUrl
    } else {
      if (pictureLocalURL !== '') {
        return pictureLocalURL
      }

      return defaultState.pictureImage
    }
  }, [pictureUrl, pictureLocalURL])

  // Return the image File from the <input /> element
  const getImageFile = () => {
    return (inputFile)
      ? (inputFile?.files?.length > 0)
        ? inputFile.files[0]
        : null
      : null
  }

  return {
    pictureImageFile: getImageFile(),
    pictureError: state.error,
    pictureImage: pictureSrc,
    setPictureFileName,
  }
}
