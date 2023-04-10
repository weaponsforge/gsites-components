import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MESSAGE_SEVERITY, notificationReceived } from '@/store/app/appSlice'

const defaultState = { loading: false, error: '', url: '' }

/**
 * Hook that fetches a remote file using xhr GET and downloads it from the browser as Blob.
 * @typedef {Object} params - Input parameter keys
 * @param {String} fileUrl - Target file's download URL
 * @param {String} fileType - Target file's mime type
 * @returns {Object} { loading, error }
 *    - loading: {Bool} File download status
 *    - error: {String} File download error
 */
export default function useDownloadFile ({ fileUrl = null, fileType = 'application/pdf' }) {
  const [state, setState] = useState(defaultState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fileUrl) {
      setState(prev => ({ ...prev, loading: true, url: fileUrl }))

      axios.get(fileUrl, {
        responseType: 'blob'
      })
        .then((response) => {
        // Download file from browser
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'file.pdf')
          document.body.appendChild(link)
          link.click()

          setState(prev => ({ ...prev, loading: false, url: '' }))
        })
        .catch((error) => {
          // Attempt to open the file to a new window tab in case of errors (i.e., CORS errors)
          window.open(fileUrl, '_blank')

          dispatch(notificationReceived({
            notification: error?.response?.data ?? error.message,
            severity: MESSAGE_SEVERITY.WARNING
          }))

          setState(prev => ({
            ...prev,
            loading: false,
            url: '',
            error: error?.response?.data ?? error.message
          }))
        })
    } else {
      setState(defaultState)
    }
  }, [dispatch, fileUrl, fileType])

  return {
    loading: state.loading,
    error: state.error
  }
}
