import MIME_TYPES_DEF from '../constants/mimetypes.json'

const getMimeByLabel = (label, key = 'MIME_TYPE') => {
  const mime = MIME_TYPES_DEF.find(item => item.LABEL === label)

  return (mime)
    ? mime[key]
    : null
}

/**
 * Get a mime definition object by index, MIME_TYPE, or LABEL.
 * @typedef {Object} params - Input parameters. Supply only (1) of each parameter at a given time.
 * @param {Number} index - (Optional) Mime definition index in MIME_TYPES_DEF.
 * @param {String} mimeType - (Optional) Mime type defined in MIME_TYPES_DEF.
 * @param {String} mimeLabel - (Optional) Mime label defined in MIME_TYPES_DEF.
 * @returns {Object} Mime type definition { id, MIME_TYPE, EXT, LABEL, CODE }
 *    - id: {Number}
 *    - MIME_TYPE: {String} Mime type
 *    - EXT: {String} File extension name
 *    - LABEL: {String} Mime type label
 *    - CODE: {String} Mime type short code
 */
const getMimeSelectOptionBy = ({ index, mimeType, mimeLabel }) => {
  if (index) {
    return MIME_TYPES_DEF[index]
  }

  if (mimeType) {
    return MIME_TYPES_DEF.find(item => item.MIME_TYPE === mimeType)
  }

  if (mimeLabel) {
    return MIME_TYPES_DEF.find(item => item.LABEL === mimeLabel)
  }
}

export {
  getMimeByLabel,
  getMimeSelectOptionBy
}
