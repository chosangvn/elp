'use strict'

class FrontendController {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    yield next
  }

}

module.exports = FrontendController
