import {
  createDocument,
  getDocument,
  deleteDocument,
  updateDocument,
  getCollection,
  generateDocumentId,
  serverTimestamp
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

export {
  createCard,
  getCard,
  deleteCard,
  updateCard,
  getCards
}
