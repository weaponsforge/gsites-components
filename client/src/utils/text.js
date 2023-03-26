/**
 * Capitalize the first letter of a string
 * @param {String} string - Any text
 * @returns {String} Input string with its first letter capitalized
 */
const capitalizeFirstLetter = (string) => {
  if (!string) {
    return ''
  } else {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }
}

export {
  capitalizeFirstLetter
}
