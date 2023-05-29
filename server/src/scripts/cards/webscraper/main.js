const extractAllPageURLS = require('./extractpageurls')
const extractPageData = require('./extractpagedata')
const { batchTransaction } = require('../../../utils/firestore')
const { BASIC_LANDS } = require('./constants')

const COLORS = Object.keys(BASIC_LANDS)

/**
 * Main program for web scraping data from the defined pages for https://basiclandart.com/ and uploading them to Firestore.
 * @param {String} COLOR - Main key (land) in BASIC_LANDS
 * @returns {String[]} All land page URLs from a root https://basiclandart.com/ land page
 */
const extractURLS = async (COLOR) => {
  try {
    // Extract URLs from each root page
    const landsURLQueries = []

    landsURLQueries.push(extractAllPageURLS(BASIC_LANDS[COLOR]))

    return (await Promise.all(landsURLQueries)).flat()
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Main program for web scraping data from the defined pages for https://basiclandart.com/ and uploading them to Firestore.
 * This process is done for demonstration and educational purposes of generating random data.
 */
const main = async () => {
  try {
    // Extract Card data for each page
    const landPageQueries = []

    for (let i = 0; i < COLORS.length; i += 1) {
      console.log('Extracting land URLs for', COLORS[i])

      const pageURLS = await extractURLS(COLORS[i])
      console.log(`  -- Extracted ${pageURLS.length} page URLs\n`)

      pageURLS.forEach((url, index) => {
        landPageQueries.push(extractPageData(url, index, {
          category: BASIC_LANDS[COLORS[i]].category,
          title: BASIC_LANDS[COLORS[i]].title
        }))
      })
    }

    console.log(`Extracting MTG Card data from ${landPageQueries.length} page URLs...`)
    const cardsData = (await Promise.all(landPageQueries)).flat()

    console.log(`Extraction successful. Uploading ${landPageQueries.length} Card documents to Firestore...`)
    await batchTransaction({
      collectionPath: `users/${process.env.AUTH_UID}/cards`,
      data: cardsData
    })

    console.log('done')
  } catch (err) {
    console.log(`[ERROR]: ${err.message}`)
  }
}

main()
