'use strict'

class CategoryController {
  * index (request, response) {
    yield response.sendView('backend/category/index')
  }

  * create (request,response)
  {
    yield response.sendView('backend/category/create')
  }
}

module.exports = CategoryController
