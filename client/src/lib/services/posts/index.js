import {
  createDocument,
  getDocument,
  deleteDocument,
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
const createPost = async (collectionPath, params) => {
  const docId = generateDocumentId(collectionPath)

  // Create the main (original) Post document
  await createDocument(collectionPath, {
    ...params,
    id: docId.id,
    date_created: serverTimestamp(),
    date_updated: serverTimestamp()
  })

  // Create the light-weight Post reference document
  const referencePath = collectionPath.replace('/posts', '/posts_ref')

  await createDocument(referencePath, {
    ...params,
    id: docId.id,
    content: '-',
    date_created: serverTimestamp(),
    date_updated: serverTimestamp()
  })

  // Fetch and return the original Post document
  return await getDocument(`${collectionPath}/${docId.id}`)
}

/**
 * Fetch a Firestore Post document
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @returns {Promise}
 */
const getPost = async (documentPath) => {
  return await getDocument(documentPath)
}

/**
 * Fetch all Posts documents under a /users/{uid}/posts subcollection
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @returns
 */
const getPosts = async (collectionPath) => {
  return await getCollection(collectionPath)
}

/**
 * Deletes the original Post document and it's reference document.
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @returns {Promise}
 */
const deletePost = async (documentPath) => {
  const referencePath = documentPath.replace('/posts', '/posts_ref')

  return await Promise.all([
    deleteDocument(documentPath),
    deleteDocument(referencePath)
  ])
}

export {
  createPost,
  getPost,
  deletePost,
  getPosts
}
