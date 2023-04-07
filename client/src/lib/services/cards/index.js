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
 * Creates a new Post (Firestore Document).
 * Also creates a Post reference Document, containing the original Post fields and values minus the (heavy) Post.content field.
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @param {Object} params - Post object
 * @returns {Promise}
 */
const createCard = async (collectionPath, params) => {
  const docId = generateDocumentId(collectionPath)
  const timestamp = serverTimestamp()

  // Create the main (original) Post document
  await createDocument(collectionPath, {
    ...params,
    id: docId.id,
    date_created: timestamp,
    date_updated: timestamp
  })

  // Create the light-weight Post reference document
  const referencePath = collectionPath.replace('/cards', '/cards_ref')

  await createDocument(referencePath, {
    ...params,
    id: docId.id,
    content: '-',
    date_created: timestamp,
    date_updated: timestamp
  })

  // Fetch and return the original Post document
  return await getDocument(`${collectionPath}/${docId.id}`)
}

/**
 * Fetch a Firestore Post document
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @returns {Promise}
 */
const getCard = async (documentPath) => {
  return await getDocument(documentPath)
}

/**
 * Fetch all Posts documents under a /users/{uid}/posts subcollection
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @returns
 */
const getCards = async (collectionPath) => {
  return await getCollection(collectionPath)
}

/**
 * Deletes the original Post document and it's reference document.
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @returns {Promise}
 */
const deleteCard = async (documentPath) => {
  const referencePath = documentPath.replace('/cards', '/cards_ref')

  return await Promise.all([
    deleteDocument(documentPath),
    deleteDocument(referencePath)
  ])
}

/**
 * Update an existing Firestore Post document.
 * Also updates the Post reference Document, containing the original Post fields and values minus the (heavy) Post.content field.
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @param {Object} params - Updated Post document keys and values
 */
const updateCard = async (documentPath, params) => {
  const referencePath = documentPath.replace('/cards', '/cards_ref')
  const timestamp = serverTimestamp()

  await Promise.all([
    updateDocument(documentPath, { ...params, date_updated: timestamp }),
    updateDocument(referencePath, { ...params, content: '-', date_updated: timestamp })
  ])

  // Fetch and return the original Post document
  return await getDocument(documentPath)
}

export {
  createCard,
  getCard,
  deleteCard,
  updateCard,
  getCards
}
