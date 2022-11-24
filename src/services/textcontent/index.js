import axios from 'axios'

const BASE_API_URL = `${process.env.NEXT_PUBLIC_BASE_PATH}/data`

const getTextContent = async ({ filename }) =>
  await axios({
    url: `${BASE_API_URL}/${filename}`,
    method: 'GET',
    responseType: 'json'
  })

export {
  getTextContent
}
