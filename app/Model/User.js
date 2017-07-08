'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  static get rules () {
    return {
      email: 'required|email',
      password: 'required',
    }
  }
}

module.exports = User
