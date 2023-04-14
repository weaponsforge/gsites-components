/**
 * Get the File details
 * @param {File} file
 * @returns {Object}
 *  - filename: {String} Full filename with extension
 *  - name: {String} Name of file without extension
 *  - ext: {String} File extension name
 */
const getFileInfo = (file) => {
  const name = file.name.substring(0, file.name.lastIndexOf('.'))
  const ext = file.name.substring(file.name.lastIndexOf('.'))

  return {
    filename: file.name,
    name,
    ext
  }
}

export {
  getFileInfo
}
