import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const directoryPrefix = (process.env.NEXT_PUBLIC_BASE_PATH !== '')
  ? '../../..'
  : ''

const defaultState = {
  fileSource: `${directoryPrefix}/images/cards/card-placeholder.png`,
  fileObject: null,
  error: ''
}

const FILE_INPUT_ID = 'filesample'

/**
 * Gets a File object's URL source from a remote download URL or local Blob URL from an `<input type="file" />` element.
 * This hook also sets the selected picture's local Blob url to the "storeName.storeKey" redux store, and returns the File data from the `<input type="file" />` specified by "inputDomID".
 * This hook works in sync with the `<FileUploadSelector />` component which has callbacks for retrieving the selected File from it's local `<input type="file" />` element.
 * @param {String} remoteFileUrl - (Optional) Remote file download URL.
 * @param {String} inputDomID - DOM "id" attribute of an `<input type="file" />` element.
 * @param {String} storeName - Main redux store state selector
 * @param {String} storeKey - Key name under the redux store state selector "storeName.storeKey"
 * @param {String} storeValueSetter - Redux slice action that mutates "storeName.storeKey"
 * @param {String} defaultStateCustom - Default local state value which should overwrite key-values in "defaultState"
 * @returns {Object}
 *    - fileSource: {String} - Picture file image source/download URL
 *    - fileObject: {File} File from the fileSource
 *    - fileError: {String} Error message.
 *    - setFileName: {Function} card store attachmentfilename setter
 */
export default function useGlobalFile (
  remoteFileUrl = undefined,
  inputDomID = FILE_INPUT_ID,
  storeName = 'cards',
  storeKey = 'attachmentfilename',
  storeValueSetter,
  defaultStateCustom
) {
  const [state, setState] = useState(defaultStateCustom ?? defaultState)
  const [filename, setFileName] = useState(null)
  const fileLocalURL = useSelector(state => state[storeName][storeKey])
  const dispatch = useDispatch()

  const INPUT_FILE = document.querySelector(`#${inputDomID}`)

  useEffect(() => {
    // Reset values
    if (filename === null || !state.fileObject || !INPUT_FILE) {
      return
    }

    if (filename === '' && state.fileObject !== null) {
      URL.revokeObjectURL(state.fileSource)
    }

    if (filename === '') {
      dispatch(storeValueSetter(''))
      INPUT_FILE.value = ''
    }
  }, [dispatch, INPUT_FILE, filename, state.fileSource, state.fileObject, storeValueSetter])

  useEffect(() => {
    // Set the local File and Blob URL
    if (filename === null || !INPUT_FILE) {
      return
    }

    let fileSource = defaultState.fileSource
    let file = null

    if (filename !== '') {
      if (INPUT_FILE.files.length > 0) {
        fileSource = URL.createObjectURL(INPUT_FILE.files[0])
        file = INPUT_FILE.files[0]
        dispatch(storeValueSetter(fileSource))
      }
    }

    setState(prev => ({
      ...prev,
      fileSource: fileSource,
      fileObject: file,
    }))
  }, [dispatch, filename, INPUT_FILE, storeValueSetter])

  useEffect(() => {
    if (remoteFileUrl !== undefined && remoteFileUrl !== null && remoteFileUrl !== '') {
      setState(prev => ({
        ...prev,
        fileSource: remoteFileUrl,
        fileObject: null
      }))
    }
  }, [remoteFileUrl])

  useEffect(() => {
    if (!state.fileObject) {
      return
    }

    return () => {
      URL.revokeObjectURL(state.fileSource)
      setState(defaultState)
    }
  }, [state.fileObject, state.fileSource])

  // Set the final File src URL, setting the public download URL src as first priority if available.
  // Uses the selected File local Blob URL, or the default picture placeholder if no File is selected.
  const fileSrc = useMemo(() => {
    if (remoteFileUrl !== undefined && remoteFileUrl !== null && remoteFileUrl !== '') {
      return remoteFileUrl
    } else {
      if (fileLocalURL !== '') {
        return fileLocalURL
      }

      return defaultState.fileSource
    }
  }, [remoteFileUrl, fileLocalURL])

  // Return the File object from the <input /> element
  const getFile = () => {
    return (INPUT_FILE)
      ? (INPUT_FILE?.files?.length > 0)
        ? INPUT_FILE.files[0]
        : null
      : null
  }

  return {
    fileObject: getFile(),
    fileSource: fileSrc,
    fileError: state.error,
    setFileName
  }
}
