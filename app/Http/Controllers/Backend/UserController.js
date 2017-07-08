'use strict'
const Controller = use('App/Http/Controllers/Backend/Controller')
const Validator = use('Validator')
const Database = use('Database')
const User = use('App/Model/User')
const Hash = use('Hash')

class UserController extends Controller{
  * login (request, response) {
    yield response.sendView('backend/user/login')
  }

  * doLogin (request, response){
    const userData = request.all()
    const validation = yield Validator.validateAll(userData, User.rules)

    if (validation.fails()) {
     let a =  yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }
    let hashPassword = yield Hash.make(userData.password);
    const user = yield User.findBy({email:userData.email})
    if(!user){
      const messages = [
        {
          field:'email',
          validation:'required',
          message:"cai gì"
        }
      ]
      yield request.with({ error: 'Please fill in all details' }).flash()

      response.redirect('back')
      return
    }
    yield request.auth.login(user);
    yield request.auth.loginViaId(user.id)
    response.redirect('/admin')

  }

  * logout (request, response){
    yield request.auth.logout()
    return response.redirect('/admin')
  }

}

module.exports = UserController
