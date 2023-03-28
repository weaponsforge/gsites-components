import axios from 'axios'

const BASE_API_URL = `${process.env.NEXT_PUBLIC_BASE_PATH}/data`

/**
 * Fetch remote JSON data
 * @param {String} filename - Filename of a remote JSON file or URL path segments of an API that returns a JSON data
 * @returns {Object} Axios response with JSON data
 * @throws {Error} Data loading error
 */
const getTextContent = async ({ filename }) =>
  await axios({
    url: `${BASE_API_URL}/${filename}`,
    method: 'GET',
    responseType: 'json'
  })

export {
  getTextContent
}
