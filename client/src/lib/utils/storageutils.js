import { storage } from '@/config/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

/**
 * Upload a file from the File API to Firebase Storage.
 * @param {String} pathToFileOnStorage - Full file path on Firebase Storage
 * @param {FormData} file FormData file
 * @returns {Promise} Promise that resolves into the file's download URL string.
 */
const uploadFileToStorage = async (pathToFileOnStorage, file) => {
  const storageRef = ref(storage, pathToFileOnStorage)
  await uploadBytes(storageRef, file)
  return await getDownloadURL(storageRef)
}

export {
  uploadFileToStorage
}
