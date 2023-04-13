import axios from 'axios'
import { getMimeSelectOptionBy } from '@/features/filecards'

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

  // Create a Card document
  await createDocument(collectionPath, {
    ...params,
    id: docId.id,
    date_created: timestamp,
    date_updated: timestamp
  })

  // Fetch and return a Card document
  return await getDocument(`${collectionPath}/${docId.id}`)
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
    const response = await axios.get(fileUrl, { responseType: 'blob' })

    // Download file from browser
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const contentType = response.data.type
    const mime = getMimeSelectOptionBy({ mimeType: contentType })
    let filename = 'download'

    if (mime) {
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
  getCardsByCategory,
  getPublicCardById
}
