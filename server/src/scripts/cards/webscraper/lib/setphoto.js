const path = require('path')
const downloadPicture = require('./downloadpicture')
const { uploadToStorage } = require('../../../../utils/firebase/storage')

const getFileName = (filename) =>
  filename.substring(filename.lastIndexOf('/') + 1, filename.length)

const setPhoto = async (cardsData = [], isPublic = false) => {
  try {
    const savePath = path.join(__dirname, 'temp')
    const downloadQueries = []
    const uploadQueries = []

    for (let i = 0; i < cardsData.length; i += 1) {
      const fName = getFileName(cardsData[i].photo_url)

      downloadQueries.push(downloadPicture({
        imageUrl: cardsData[i].photo_url,
        savePath,
        fileName: fName
      }))
    }

    await Promise.all(downloadQueries)

    for (let i = 0; i < cardsData.length; i += 1) {
      const fName = getFileName(cardsData[i].photo_url)
      const ext = fName.substring(fName.lastIndexOf('.'))
      const contentType = `image/${ext.substring(1, ext.length)}`

      const localFilePath = path.join(__dirname, 'temp', fName)
      const bucketFilePath = `users/${process.env.AUTH_UID}/${cardsData[i].id}_thumbnail`

      uploadQueries.push(uploadToStorage(
        localFilePath,
        bucketFilePath,
        fName,
        contentType,
        ext,
        isPublic
      ))
    }

    console.log(`Uploading ${cardsData.length} photos to Firebase Storage...`)
    await Promise.all(uploadQueries)

    return true
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = setPhoto
