import {
  createDocument,
  getDocument,
  deleteDocument,
  updateDocument,
  getCollection,
  getCollectionGroup,
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
  const timestamp = serverTimestamp()

  // Create the main (original) Post document
  await createDocument(collectionPath, {
    ...params,
    id: docId.id,
    date_created: timestamp,
    date_updated: timestamp
  })

  // Create the light-weight Post reference document
  const referencePath = collectionPath.replace('/posts', '/posts_ref')

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
const getPost = async (documentPath) => {
  return await getDocument(documentPath)
}

/**
 * Fetch all Posts reference documents under a /users/{uid}/posts_ref subcollection
 * The reference Posts (posts_ref) documents contain the original Posts data minus the Post.content field.
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @returns
 */
const getPosts = async (collectionPath) => {
  return await getCollection(collectionPath)
}

/**
 * Fetch all Posts with status (field) published=true.
 * Including the docId parameter will fetch only a single Post.
 * @param {String} docId - (Optional) Firestore Post document ID.
 * @returns {Promise} Promise that resolves to an Object[] of Firestore documents.
 */
const getPublishedPosts = async (docId) => {
  const conditions = [{ field: 'published', op: '==', value: true }]

  if (docId) {
    conditions.push({ field: 'id', op: '==', value: docId })
  }

  return await getCollectionGroup('posts', conditions)
}

/**
 * Fetch all Posts by country field name and with status (field) published=true.
 * @param {String} country - Country name
 * @returns {Promise} Promise that resolves to an Object[] of Firestore documents.
 */
const getPublishedPostsByCountry = async (country) => {
  const conditions = [
    { field: 'published', op: '==', value: true },
    { field: 'country', op: '==', value: country }
  ]

  return await getCollectionGroup('posts', conditions)
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

/**
 * Update an existing Firestore Post document.
 * Also updates the Post reference Document, containing the original Post fields and values minus the (heavy) Post.content field.
 * @param {String} documentPath - Firestore slash-separated path to a Document
 * @param {Object} params - Updated Post document keys and values
 */
const updatePost = async (documentPath, params) => {
  const referencePath = documentPath.replace('/posts', '/posts_ref')
  const timestamp = serverTimestamp()

  await Promise.all([
    updateDocument(documentPath, { ...params, date_updated: timestamp }),
    updateDocument(referencePath, { ...params, content: '-', date_updated: timestamp })
  ])

  // Fetch and return the original Post document
  return await getDocument(documentPath)
}

export {
  createPost,
  getPost,
  deletePost,
  updatePost,
  getPosts,
  getPublishedPosts,
  getPublishedPostsByCountry
}
