const axios = require('axios')
const cheerio = require('cheerio')
const { admin } = require('../../../utils/db')
const { generateDocumentId } = require('../../../utils/firebase/firestore')

/**
 * Extract Card web page data from a card page on https://basiclandart.com/
 * @param {String} LAND_PAGE_URL - Single card page URL
 * @param {Number} index - Identification number
 * @param {Object} params - Card (File Card) parameters to add in the extracted data
 * @returns {Object} Card object
 */
const extractPageData = async (LAND_PAGE_URL, index, params) => {
  try {
    const { data } = await axios.get(LAND_PAGE_URL)
    const $ = cheerio.load(data)

    const $wrapper = $('#wrapper')

    const imageSrc = $wrapper.find('img:first')[0].attribs.src
    const text = $wrapper.find('p:first').text()

    let title = $('title').text()
    title = title.substring(0, title.indexOf('«') - 1)
    title = title.split('by').map(item => item.trim())

    const id = generateDocumentId(`users/${process.env.AUTH_UID}/cards`)

    return {
      id,
      category: params.category,
      description: text,
      download_url: params?.download_url ?? '',
      mime_type: params?.mime_type ?? '',
      picture_url: imageSrc,
      photo_url: imageSrc,
      published: false,
      subtitle: title[0],
      title: `${params?.title ?? ''} ${index}`,
      website_url: LAND_PAGE_URL,
      uid: process.env.AUTH_UID,
      date_created: admin.firestore.Timestamp.now(),
      date_updated: admin.firestore.Timestamp.now()
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = extractPageData
