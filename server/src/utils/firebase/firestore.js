const { db } = require('../db')
const ServerError = require('../error')

/**
 * Generate a random Firebase document ID
 * @param {String} collectionPath - Firestore slash-separated path to a collection
 * @returns {String} Firebase document ID
 */
const generateDocumentId = (collectionPath) =>
  db.collection(collectionPath).doc().id

/**
 * Create a new Firestore document.
 * @typedef {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - (Optional) Document name or ID. Firestore will generate a random document ID if ommitted.
 * @param {Object} param.params - Key-value pairs that make up a Document
 * @returns {Promise}
 */
const createDocument = async ({ collectionPath, docId, params }) => {
  const documentId = (docId) || db.collection(collectionPath).doc().id

  return await db
    .collection(collectionPath)
    .doc(documentId)
    .set({
      ...params,
      id: documentId
    })
}

/**
 * Update an existing Firestore document.
 * @typedef {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - Document name or ID
 * @param {Object} param.params - Key-value pairs to update in the Document
 * @returns {Promise}
 */
const updateDocument = async ({ collectionPath, docId, params }) => {
  return await db
    .collection(collectionPath)
    .doc(docId)
    .update(params)
}

/**
 * Delete a Firestore document
 * @typedef {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - Document name or ID
 * @returns {Promise}
 * @throws {Error}
 */
const deleteDocument = async ({ collectionPath, docId }) => {
  const doc = await getDocument({ collectionPath, docId })

  if (doc) {
    return await db.collection(collectionPath).doc(docId).delete()
  } else {
    throw new ServerError(
      'Document does not exist',
      ServerError.httpErrorCodes._404)
  }
}

/**
 * Fetch/get an existing Firestore document
 * @typedef {Object} param - Input parameters
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection
 * @param {String} param.docId - Document name or ID
 * @returns {Object} Returns the Firestore document or null
 */
const getDocument = async ({ collectionPath, docId }) => {
  const document = await db.collection(collectionPath).doc(docId).get()

  return (document.exists)
    ? document.data()
    : null
}

/**
 * Fetch/get a Firestore documents from a root collection or nested subcollection.
 * @typedef {Object} param - Input parameters.
 * @param {String} param.collectionPath - Path to a root collection or nested subcollection.
 * @param {Number} limit - Number of documents to return as result.
 * @typedef {Object[]} whereQueries - An array of Firestore query items following the format [{ field, op, value }...]
 * @param {String} whereQueries.field - Document field name.
 * @param {String} whereQueries.op - Firestore where query equality operator ('==', '!=', '>', '<', 'in', etc)
 * @param {String} whereQueries.value - Document field parameter value.
 * @returns {Object[]} Array of Firestore documents from a collection.
 */
const getCollection = async ({ collectionPath, whereQueries = [], limit = 0 }) => {
  let colRef = db.collection(collectionPath)

  if (whereQueries.length > 0) {
    whereQueries.forEach((whereQuery) => {
      colRef = colRef.where(whereQuery.field, whereQuery.op, whereQuery.value)
    })
  }

  if (limit > 0) {
    colRef = colRef.limit(limit)
  }

  return await colRef.get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
}

/**
 * Returns a Firestore Date with time in a simple String
 * @param {Firestore Date} firestoreTimeStamp - Firestore timestamp { seconds, nanoseconds }
 * @returns {String} String-converted Firestore Date with Time
 */
const timestampToDateString = (firestoreTimeStamp) => {
  const currentDate = firestoreTimeStamp.toDate()
  const DAY_FORMAT_OPTIONS = { hour: '2-digit', minute: '2-digit' }
  return `${currentDate.toDateString()} ${currentDate.toLocaleTimeString('it-IT', DAY_FORMAT_OPTIONS)}`
}

/**
 * Group an array of document ID's into unique-element/item groups (arrays) of 10's.
 * @param {String[]} docIds
 * @returns {String[]} String Array containing Arrays with max 10 elements each.
 */
const groupByTens = (docIds) =>
  [...new Set(docIds)].reduce((list, item) => {
    const subgroups = list.length - 1

    if (list[subgroups].length < 10) {
      list[subgroups].push(item)
    } else {
      list.push([item])
    }

    return list
  }, [[]])

const batchTransaction = async ({ collectionPath, data = [], useStorageURL = false }) => {
  let counter = 0
  let commitCounter = 0

  const batches = []
  batches[commitCounter] = db.batch()

  data.forEach(item => {
    if (counter <= 498) {
      const docRef = db.collection(collectionPath).doc()

      item.id = docRef.id

      if (useStorageURL) {
        // Prepare and use the public storage file URL
        // Call makePublic() on file's storage reference later during file upload, to make this URL publicly available
        item.picture_url = `https://storage.googleapis.com/${process.env.FIREBASE_PROJECT_ID}.appspot.com/users/${process.env.AUTH_UID}/${item.id}_thumbnail`
      }

      batches[commitCounter].set(docRef, item)

      counter += 1
    } else {
      // Reset counter
      counter = 0
      commitCounter += 1
      batches[commitCounter] = db.batch()
    }
  })

  const pause = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })

  try {
    for (let i = 0; i < batches.length; i += 1) {
      await pause()

      batches[i].commit().then(() => {
        console.log(`Uploaded batch documents ${i}, ${batches[i]._ops.length} items`)
      })
    }

    return [ ...data ]
  } catch (err) {
    throw new Error(`[ERROR]: ${err.message}`)
  }
}

module.exports = {
  createDocument,
  updateDocument,
  deleteDocument,
  getDocument,
  getCollection,
  batchTransaction,
  generateDocumentId,
  timestampToDateString,
  groupByTens
}
