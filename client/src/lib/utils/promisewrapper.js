export default class PromiseWrapper {
  static STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error',
    DEFAULT: 'default'
  }

  /**
 * Formats the success or error results of a Promise into a { response, status, error } object format.
 * Resolves a rejected Promise without throwing errors.
 * @param {Promise} promise - An async javascript method (Promise)
 * @returns {Promise} A promise that resolves to { response: Object, status: String, error: String }
 */
  static wrap (promise) {
    return new Promise((resolve) => {
      promise.then(
        res => {
          resolve({
            response: res,
            status: PromiseWrapper.STATUS.SUCCESS,
            error: ''
          })
        },
        err => {
          resolve({
            response: null,
            status: PromiseWrapper.STATUS.ERROR,
            error: err?.response?.data ?? err.message
          })
        }
      )
    })
  }
}
