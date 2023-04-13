import { useEffect, useState } from 'react'
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
 * Get/set a File Card's picture image source and File from the
 * FileUploadSelector component's <input type="file" id="picturefile" /> element.
 * @param {String} pictureUrl - (Optional) Picture file download URL
 * @returns {Object}
 *    - pictureImage: {String} - Picture file image source/download URL
 *    - pictureImageFile: {File} File from the pictureImage
 *    - pictureError: {String} Error message.
 *    - setPictureFileName: {Function} card store picturefilename setter
 */
export default function usePictureFile (pictureUrl = undefined) {
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()
  const pictureFileName = useSelector(state => state.cards.picturefilename)

  useEffect(() => {
    const inputFile = document.querySelector('#picturefile')

    if (!inputFile) {
      setState(prev => ({ ...prev, error: '<input /> #picturefile not found.' }))
    }
  }, [])

  useEffect(() => {
    let imgSource = defaultState.pictureImage
    let file = null

    if (pictureFileName !== '') {
      const inputFile = document.querySelector('#picturefile')

      if (inputFile) {
        if (inputFile.files.length > 0) {
          imgSource = URL.createObjectURL(inputFile.files[0])
          file = inputFile.files[0]
        }
      }
    }

    setState(prev => ({
      ...prev,
      pictureImage: imgSource,
      pictureImageFile: file,
    }))
  }, [pictureFileName])

  useEffect(() => {
    if (pictureUrl !== undefined && pictureUrl !== null && pictureUrl !== '') {
      setState(prev => ({
        ...prev,
        pictureImage: pictureUrl,
        pictureImageFile: null
      }))
    }
  }, [pictureUrl])

  const setPictureFileName = (fileName = '') => {
    dispatch(cardPictureReceived(fileName))
  }

  return {
    pictureImage: state.pictureImage,
    pictureImageFile: state.pictureImageFile,
    pictureError: state.error,
    setPictureFileName
  }
}
