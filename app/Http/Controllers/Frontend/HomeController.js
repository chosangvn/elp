'use strict'
//const Frontend = use('FrontendController')

class HomeController{
  * index (request, response) {
    yield response.sendView('frontend/home/index')
  }

  * about(request,response){
    yield response.sendView('frontend/home/about')
  }
}

module.exports = HomeController
