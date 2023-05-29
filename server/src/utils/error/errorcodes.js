/**
 * HTTP status codes
 * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */

const ERROR_CODES = {
  /** OK */
  _200: 200,
  /** Accepted */
  _202: 202,
  /** See Other */
  _303: 303,
  /** Bad Request */
  _400: 400,
  /** Unauthorized */
  _401: 401,
  /** Forbidden */
  _403: 403,
  /** Not Found */
  _404: 404,
  /** Method Not Allowed */
  _405: 405,
  /** Not Acceptable */
  _406: 406,
  /** Proxy Authentication Required */
  _407: 407,
  /**  Gone */
  _410: 410,
  /** Unsupported Media Type */
  _415: 415,
  /** Unprocessable Content */
  _422: 422,
  /** Locked */
  _423: 423,
  /** Failed Dependency  */
  _424: 424,
  /** Too Many Requests */
  _429: 429,
  /** 'Page Expired' */
  _419: 419,
  /** 'Method Failure' */
  _420: 420,
  /** 'Login Time-out' */
  _440: 440,
  /** 'Retry With' */
  _449: 449,
  /** 'Client Closed Request' */
  _499: 499,
  /** 'No Response' */
  _444: 444,
  /** 'Internal Server Error' */
  _500: 500,
  /** 'Not Implemented' */
  _501: 501,
  /** 'Bad Gateway' */
  _502: 502,
  /** 'Service Unavailable' */
  _503: 503,
  /** 'Gateway Timeout' */
  _504: 504,
  /** 'HTTP Version Not Supported' */
  _505: 505,
  /** 'Network Authentication Required' */
  _511: 511,
  /** 'Web Server Returned an Unknown Error' */
  _520: 520,
  /** 'Web Server Is Down' */
  _521: 521,
  /** 'Connection Timed Out' */
  _522: 522
}

module.exports = {
  ERROR_CODES
}
