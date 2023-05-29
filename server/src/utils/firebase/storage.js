const fs = require('fs')
const { bucket } = require('../db')

const getPublicStorageURL = (pathToBucketFile) => {
  const file = bucket.file(pathToBucketFile)
  return file.publicUrl()
}

const uploadToStorage = async (pathToLocalFile, pathToBucketFile, fileName, contentType, ext, makePublic = false) => {
  return await bucket.upload(pathToLocalFile, {
    destination: pathToBucketFile,
    gzip: true,
    public: makePublic,
    metadata: {
      contentType: contentType,
      cacheControl: 'no-cache',
      metadata: {
        ext,
        fileName,
        createdAt: Date.now()
      }
    }
   })
}

const uploadToStorage2 = async (pathToLocalFile, pathToBucketFile, fileName, ext) => {
  const fileRef = bucket.file(pathToBucketFile)
  const file = fs.createReadStream(pathToLocalFile)

  file.pipe(fileRef.createWriteStream({
    gzip: true,
    resumable: false,
    validation: false,
    metadata: {
      contentType: 'image/jpeg',
      metadata: {
        ext: '-',
        fileName,
        createdAt: Date.now()
      }
    }
  }))


  return await bucket.upload(pathToLocalFile, {
    destination: pathToBucketFile,
    gzip: true,
    metadata: {
      fileName,
      cacheControl: 'no-cache'
    }
   })
}

module.exports = {
  uploadToStorage,
  uploadToStorage2,
  getPublicStorageURL
}
