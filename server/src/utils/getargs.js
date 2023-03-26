/**
 * Get the nodejs cli input parameter values
 * @param {String[]} params - Array of cli input params
 * @returns {Object} Input params with user-input values
 */
const getargs = ({
  params = [],
  optional = []
}) => {
  const args = params.reduce((collection, param) => {
    if (process.env[`npm_config_${param}`] !== undefined) {
      collection[param] = process.env[`npm_config_${param}`]
    }

    return { ...collection }
  }, {})

  params.forEach(param => {
    if (args[param] === undefined && !optional.includes(param)) {
      throw new Error(`Undefined args "${param}"`)
    }
  })

  return args
}

module.exports = getargs
