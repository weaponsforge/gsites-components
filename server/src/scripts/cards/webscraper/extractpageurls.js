const axios = require('axios')
const cheerio = require('cheerio')

/**
 * Extracts an array of URLs linking to individual lands page from a main https://basiclandart.com page
 * @param {String} url - URL to a main https://basiclandart.com page containing thumbnails and links to individual lands page
 * @returns {String[]} Array of URLs
 */
const extractPageURLS = async (url) => {
  try {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data?.html ?? data)

    const $pageURLS = $('.posts > a')

    return $pageURLS.map(function () {
      return $(this).attr('href')
    }).get()
  } catch (err) {
    throw new Error(err.message)
  }
}

/**
 * Extracts all URLs of individual lands page from a root https://basiclandart.com page from paginated queries.
 * @param {Object} LAND - Root https://basiclandart.com page definitions
 * @returns {String[]} Array of URLs from all paginated queries
 */
const extractAllPageURLS = async (LAND, PAGE_LIMIT = -1) => {
  try {
    const batchRequests = [extractPageURLS(LAND.FIRST_PAGE)]

    for (let i = 0; i < LAND.PAGES; i += 1) {
      if (PAGE_LIMIT >= 0 && batchRequests.length === PAGE_LIMIT) {
        break
      }

      const query = `https://basiclandart.com/wp-admin/admin-ajax.php?id=&post_id=${LAND.POST_ID}&slug=${LAND.TAG}&/tag/${LAND.TAG}/&posts_per_page=60&page=${i}&offset=60&post_type=post&repeater=default&seo_start_page=1&preloaded=false&preloaded_amount=0&tag=${LAND.TAG}&order=DESC&orderby=date&action=alm_get_posts&query_type=standard`

      batchRequests.push(extractPageURLS(query))
    }

    const response = (await Promise.all(batchRequests)).flat()
    return response
  } catch (err) {
    console.log(`[ERROR]: ${err.message}`)
  }
}

module.exports = extractAllPageURLS
