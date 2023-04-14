import axios from 'axios'
import { getMimeSelectOptionBy } from '@/features/filecards'
import { fetchMetaDataFromURL, uploadFileToStorage, deleteFileFromStorage } from '@/utils/storageutils'
import { getFileInfo } from '@/utils/files'

import {
  createDocument,
  getDocument,
  deleteDocument,
  updateDocument,
  getCollection,
  generateDocumentId,
  serverTimestamp,
  getCollectionGroup
} from '@/utils/firestoreutils'

/**
 * Creates a new Card (Firestore Document).
 * Also creates a Card reference Document, containing the original Card fields and values minus the (heavy) Card.content field.
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @param {Object} params - Card object
 * @returns {Promise}
 */
const createCard = async (collectionPath, params) => {
  const docId = generateDocumentId(collectionPath)
  const timestamp = serverTimestamp()

  const cardId = (params.id !== undefined)
    ? params.id
    : docId.id

  // Create a Card document
  await createDocument(collectionPath, {
    ...params,
    id: cardId,
    date_created: timestamp,
    date_updated: timestamp
  })

  // Fetch and return a Card document
  return await getDocument(`${collectionPath}/${cardId}`)
}

/**
 * Fetch a Firestore Card document
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @returns {Promise}
 */
const getCard = async (documentPath) => {
  return await getDocument(documentPath)
}

/**
 * Fetch all Card documents under a /users/{uid}/cards subcollection
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @returns
 */
const getCards = async (collectionPath) => {
  return await getCollection(collectionPath)
}

/**
 * Deletes a Card document
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @returns {Promise}
 */
const deleteCard = async (documentPath) => {
  return await deleteDocument(documentPath)
}

/**
 * Update an existing Firestore Card document.
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @param {Object} params - Updated Post document keys and values
 */
const updateCard = async (documentPath, params) => {
  const timestamp = serverTimestamp()
  await updateDocument(documentPath, { ...params, date_updated: timestamp })

  // Fetch and return the Card document
  return await getDocument(documentPath)
}

/**
 * Promise that fetches a remote file using xhr GET and downloads it from the browser as Blob.
 * @param {String} fileUrl - Target file's download URL
 * @returns {Promise}
 * @throws {Error}
 */
const downloadCardFile = async (fileUrl) => {
  try {
    // Check if fileUrl is a Firebase Storage URL
    const isFirebaseStorage = fileUrl.includes('https://firebasestorage.googleapis.com/')
    let filename = 'download'

    const response = await axios.get(fileUrl, { responseType: 'blob' })

    // Download file from browser
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const contentType = response.data.type
    const mime = getMimeSelectOptionBy({ mimeType: contentType })

    if (isFirebaseStorage) {
      const response = await fetchMetaDataFromURL(fileUrl)

      if (response.data.metadata !== undefined) {
        const { metadata } = response.data

        if (metadata.fileName && metadata.ext) {
          filename = `${metadata.fileName}${metadata.ext}`
        }
      }
    }

    if (mime && !isFirebaseStorage) {
      const fileNormalURL = decodeURIComponent(fileUrl).toLowerCase()
      const extIndex = fileNormalURL.indexOf(mime.EXT)

      if (extIndex > -1) {
        // Get the download file name
        filename = fileNormalURL.substring(
          fileNormalURL.lastIndexOf('/') + 1, fileNormalURL.indexOf(mime.EXT) + mime.EXT.length)
      } else {
        // Use a generic download file name
        filename += mime.EXT
      }
    }

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', filename)

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (err) {
    // Attempt to open the file to a new window tab in case of errors (i.e., CORS errors)
    window.open(fileUrl, '_blank')
    throw new Error(err?.response?.statusText ?? err.message)
  }
}

/**
 * Uploads a Card file using a custom namin method and without any extension name from the File API to Firebase Storage.
 * Inserts a custom metadata object { fileName, ext } to the Firebase Storage file, containing:
 *    - metadata.filename: {String} File name minus the extension file name
 *    - metadata.ext: {String} File extension name.
 * @typedef {Object} params - Input parameters
 * @param {String} pathToStorageDirectory - Firebase Storage reference path minus the file name
 * @param {File} file FormData file
 * @param {String} filename - File name (with or without extension name)
 * @param {String} prefix - Additional string to append to a file name's start.
 * @returns {Promise} Promise that resolves into the file's download URL string.
 */
const uploadCardFile = async ({ pathToStorageDirectory, file, filename = null, prefix = '' }) => {
  const { name, ext } = getFileInfo(file)
  let modFileName = ''

  if (filename !== null) {
    modFileName += ((prefix !== '') ? `${prefix}_` : '')
    modFileName += filename
  } else {
    modFileName += ((prefix !== '') ? `${prefix}_` : '')
    modFileName += `${name}_`
    modFileName += Math.random().toString(36).substring(2, 8) + '_' +
      Math.floor((new Date()).getTime() / 1000) + ext
  }

  const metadata = {
    fileName: name,
    ext
  }

  return await uploadFileToStorage(
    pathToStorageDirectory, file, modFileName, metadata)
}

/**
 * Delete a Card file in Firebase Storage.
 * @param {String} fileUrl - Target file's download URL
 * @returns {Promise}
 */
const deleteCardFile = async (fileUrl) => {
  const isFirebaseStorage = fileUrl.includes('https://firebasestorage.googleapis.com/')

  if (isFirebaseStorage) {
    const response = await fetchMetaDataFromURL(fileUrl)
    const { bucket, metadata, name } = response.data

    if (metadata === undefined || bucket === undefined) {
      return true
    }

    if (bucket !== process.env.NEXT_PUBLIC_FIREBASE_WEB_STORAGE_BUCKET) {
      return true
    }

    return await deleteFileFromStorage({ pathToStorageFile: name })
  } else {
    return true
  }
}

/**
 * Fetch all Cards by category field name.
 * @param {String} category - Card category name
 * @returns {Promise} Promise that resolves to an Object[] of Firestore documents.
 */
const getCardsByCategory = async (category) => {
  const conditions = [
    { field: 'category', op: '==', value: category }
  ]

  return await getCollectionGroup('cards', conditions)
}

/**
 * Fetch a File Card by id field name across users /cards subcollections.
 * @param {String} cardId - Card document ID
 * @returns {Promise} Promise that resolves to an Object[] containing a Firestore document.
 */
const getPublicCardById = async (cardId) => {
  const conditions = [
    { field: 'id', op: '==', value: cardId }
  ]

  return await getCollectionGroup('cards', conditions)
}

export {
  createCard,
  getCard,
  deleteCard,
  updateCard,
  getCards,
  downloadCardFile,
  uploadCardFile,
  deleteCardFile,
  getCardsByCategory,
  getPublicCardById
}
