require('dotenv').config()
const { initializeApp } = require('firebase-admin/app')
const { getAuth } = require('firebase-admin/auth')
const { getFirestore } = require('firebase-admin/firestore')
const { getStorage } = require('firebase-admin/storage')
const admin = require('firebase-admin')

let db
let bucket

if (process.env.FIREBASE_SERVICE_ACC === undefined || process.env.FIREBASE_PRIVATE_KEY === undefined) {
  console.log('FIREBASE_SERVICE_ACC or FIREBASE_PRIVATE_KEY is missing.')
  process.exit(1)
} else {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACC)
  const storageBucket = serviceAccount.project_id

  // Escape the "private_key" read by dotenv
  // serviceAccount.private_key = process.env.FIREBASE_PRIVATE_KEY
  serviceAccount.private_key = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')

  initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: `${storageBucket}.appspot.com`
  })

  db = getFirestore()
  bucket = getStorage().bucket()
}

module.exports = {
  getAuth,
  bucket,
  admin,
  db
}
