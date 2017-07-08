'use strict'
const User = use('App/Model/User')
class UserController {

  * redirect (request, response) {
    yield request.ally.driver('facebook').redirect()
  }

  * handleCallback (request, response) {
    const fbUser = yield request.ally.driver('facebook').getUser()

    response.send(fbUser)
    // const searchAttr = {
    //   email: fbUser.getEmail()
    // }
    //
    // const newUser = {
    //   email: fbUser.getEmail(),
    //   avatar: fbUser.getAvatar(),
    //   username: fbUser.getName()
    // }
    //
    // const user = yield User.findOrCreate(searchAttr, newUser)
    //
    // request.auth.loginViaId(user.id)
  }
}

module.exports = UserController
