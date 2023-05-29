const fs = require('fs')
const path = require('path')
const axios = require('axios')

const downloadPicture = async ({ imageUrl, savePath, fileName }) => {
  // Create directory
  if (!fs.existsSync(savePath)) {
    fs.mkdirSync(savePath, { recursive: true })
  }

  // Set the file name on the directory savePath
  const fName = fileName ?? imageUrl.substring(imageUrl.lastIndexOf('/') + 1, imageUrl.length)
  const filePath = path.join(savePath, fName)

  return new Promise(async (resolve, reject) => {
    const writer = fs.createWriteStream(filePath)

    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'stream'
    })

    response.data.pipe(writer)

    writer.on('finish', resolve)
    writer.on('error', reject)
  })

}

module.exports = downloadPicture
