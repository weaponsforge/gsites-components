import {
  createDocument,
  getDocument,
  getCollection,
  serverTimestamp
} from '@/utils/firestoreutils'

/**
 * Create a new Post (Firestore Document)
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @param {Object} params - Post object
 * @returns {Promise}
 */
const createPost = async (collectionPath, params) => {
  return await createDocument(collectionPath, {
    ...params,
    date_created: serverTimestamp(),
    date_updated: serverTimestamp()
  })
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

export {
  createPost,
  getPost,
  getPosts
}
