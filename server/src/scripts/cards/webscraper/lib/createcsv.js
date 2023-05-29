
const fs = require('fs')
const path = require('path')
const fastcsv = require('fast-csv')

const createCSV = (data, savePath, fileName) => {
  // Create directory
  if (!fs.existsSync(savePath)) {
    fs.mkdirSync(savePath, { recursive: true })
  }

  try {
    const filePath = path.join(savePath, fileName)

    const out = fs.createWriteStream(filePath)
    const csvStream = fastcsv.format({ headers: true })
    csvStream.pipe(out)

    data.forEach(item => {
      csvStream.write(item)
    })

    csvStream.end()
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = createCSV
