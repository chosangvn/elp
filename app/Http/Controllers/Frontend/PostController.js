'use strict'
const Database = use('Database')

class PostController {
  * index (request, response) {
    const users = yield Database.select('*').from('tbl_user')
    console.log(users);
    yield response.sendView('frontend/post/index')
  }
  * view (request, response) {
    yield response.sendView('post/view')
  }
}

module.exports = PostController
