import axios from 'axios'
import { storage } from '@/config/firebase'
import { ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage'

/**
 * Upload a file from the File API to Firebase Storage.
 * @param {String} pathToStorageDirectory - Firebase Storage reference path minus the file name
 * @param {File} file FormData file
 * @param {String} filename - File name (with or without extension name)
 * @param {String} prefix - Additional string to append to a file name's start.
 * @returns {Promise} Promise that resolves into the file's download URL string.
 */
const uploadFileToStorage = async (pathToStorageDirectory, file, fileName, metadata = null) => {
  const storageRef = ref(storage, `${pathToStorageDirectory}/${fileName}`)
  await uploadBytes(storageRef, file, { customMetadata: metadata })
  return await getDownloadURL(storageRef)
}

/**
 * Delete a file in Firebase Storage
 * @param {String} pathToStorageDirectory - Firebase Storage reference path minus the file name
 * @param {String} filename - File name (with or without extension name)
 * @returns {Promise}
 */
const deleteFileFromStorage = async ({ pathToStorageDirectory, pathToStorageFile, fileName }) => {
  const filePath = pathToStorageFile ?? `${pathToStorageDirectory}/${fileName}`
  const storageRef = ref(storage, `${filePath}`)
  return await deleteObject(storageRef)
}

/**
 * Fetch a Firebase Storage file's metadata over HTTP
 * @param {String} downloadURL - Firebase storage file's downloadURL
 * @returns {Promise} Promise that Resolves to a Firebase Storage metadata object.
 *  - metadata.ext: {String} File extension name
 *  - metadata.fileName: {String} File name without extension name
 */
const fetchMetaDataFromURL = async (downloadURL) => {
  const fileNormalURL = downloadURL
  const metaUrl = fileNormalURL.substring(0, fileNormalURL.lastIndexOf('?alt=media'))
  return await axios.get(metaUrl)
}

export {
  uploadFileToStorage,
  deleteFileFromStorage,
  fetchMetaDataFromURL
}
