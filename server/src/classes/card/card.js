const { admin } = require('../../utils/db')
const { createDocument } = require('../../utils/firestore')

const createCard = async (params) => {
  return await createDocument({
    collectionPath: `users/${params.uid}/cards`,
    params: {
      category: params?.category ?? '',
      uid: params?.uid ?? '',
      description: params?.description ?? '',
      download_url: params?.download_url ?? '',
      mime_type: params?.mime_type ?? '',
      picture_url: params?.picture_url ?? '',
      website_url: params?.website_url ?? '',
      published: params?.published ?? '',
      subtitle: params?.subtitle ?? '',
      title: params?.title ?? '',
      date_created: admin.firestore.Timestamp.now(),
      date_updated: admin.firestore.Timestamp.now()
    }
  })
}

module.exports = {
  createCard
}
