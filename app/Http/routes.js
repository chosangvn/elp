'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.group('frontend',function () {
  Route.get('/','Frontend/HomeController.index')
  Route.get('/about','Frontend/HomeController.about')
  Route.get('/post/index','Frontend/PostController.index')
  Route.get('/post/view','Frontend/PostController.view')
  Route.get('/facebook/login','Frontend/UserController.redirect')
  Route.get('/facebook/authenticated','Frontend/UserController.handleCallback')
})
Route.group('backend',function () {
  Route.get('/','Backend/HomeController.index')
  Route.get('/category','Backend/CategoryController.index')
  Route.get('/post/index','Backend/PostController.index')
  Route.get('/post/view','Backend/PostController.view')
  Route.get('/dang-nhap','Backend/UserController.login')
  Route.post('/dang-nhap','Backend/UserController.doLogin')
  Route.get('/logout','Backend/UserController.logout')
  Route.get('/category/create','Backend/CategoryController.create')
}).prefix('admin').middleware('auth')
