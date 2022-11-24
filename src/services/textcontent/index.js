import axios from 'axios'

const BASE_API_URL = '/data'

const getTextContent = async ({ filename }) =>
  await axios({
    url: `${BASE_API_URL}/${filename}`,
    method: 'GET',
    responseType: 'json'
  })

export {
  getTextContent
}
