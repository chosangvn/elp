'use strict'
//ok thanks cậu. để tớ tìm hiểu thêm có gì ko hiểu thì
const Controller = use('App/Http/Controllers/Backend/Controller')

class HomeController extends Controller {
  * index (request, response) {

    yield response.sendView('backend/home/index')
  }

  * about(request,response){
    yield response.sendView('backend/home/about')
  }
}

module.exports = HomeController
