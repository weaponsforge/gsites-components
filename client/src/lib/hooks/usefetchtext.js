import { useEffect, useState } from 'react'
import { getTextContent } from '@/services/textcontent'

/**
 * React hook wrapper for the getTextContent() data fetching method
 * @param {String} filename - Filename of a remote JSON file or URL path segments of an API that returns a JSON data
 * @returns {Object} Axios response with JSON data
 * @throws {Error} Data loading error
 */
export function useFetchText ({ filename }) {
  const [data, setTextContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await (getTextContent({ filename }))
        setLoading(false)
        setTextContent(response.data)
      } catch (err) {
        setError(err.message)
      }
    }

    loadData()
  }, [filename])

  return { data, loading, error }
}
