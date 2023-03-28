/**
 * Find a random number between min and max, inclusive
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} Random number between min and max, inclusive
 */
const randomize = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default randomize
