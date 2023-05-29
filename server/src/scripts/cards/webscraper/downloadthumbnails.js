const path = require('path')
const axios = require('axios')
const cheerio = require('cheerio')
const { downloadPicture } = require('./lib')
const { BASIC_LANDS } = require('./constants')

/**
 * Extracts an array of URLs linking to individual lands page from a main https://basiclandart.com page
 * @param {String} url - URL to a main https://basiclandart.com page containing thumbnails and links to individual lands page
 * @returns {String[]} Array of URLs
 */
const extractThumbnailURLS = async (url) => {
  try {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data?.html ?? data)

    const $pageURLS = $('.posts > a > img')

    return $pageURLS.map(function () {
      return $(this).attr('src')
    }).get()
  } catch (err) {
    throw new Error(err.message)
  }
}

const main = async () => {
  const savePath = path.resolve(__dirname, 'thumbnails')
  let thumbnailURLS = []

  try {
    const urlQueries = []

    for (let LAND in BASIC_LANDS) {
      urlQueries.push(extractThumbnailURLS(BASIC_LANDS[LAND].FIRST_PAGE))
    }

    console.log('Extracting thumbnail photo URLs...')
    thumbnailURLS = (await Promise.all(urlQueries)).flat()
  } catch (err) {
    console.log(`[ERROR]: ${err.message}`)
    process.exit(1)
  }

  try {
    const photoQueries = []

    for (let i = 0; i < thumbnailURLS.length; i += 1) {
      photoQueries.push(downloadPicture({
        imageUrl: thumbnailURLS[i],
        savePath
      }))
    }

    console.log(`Downloading ${thumbnailURLS.length} thumbnail pictures...`)
    await Promise.all(photoQueries)
    console.log('done')
  } catch (err) {
    console.log(`[ERROR]: ${err.message}`)
    process.exit(1)
  }

  process.exit(0)
}

main()
