'use strict'

class Auth {

  * handle (request, response, next) {
    const isLoggedIn = yield request.auth.check()
    if(request.url()!='/admin/dang-nhap' && !isLoggedIn){
        response.redirect('/admin/dang-nhap')
    }else if(request.url() =='/admin/dang-nhap' && isLoggedIn){
      response.redirect('/admin')
    }
    yield next
  }

}

module.exports = Auth
