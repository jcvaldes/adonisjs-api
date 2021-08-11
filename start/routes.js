'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello worlsd in JSON' }
})
// Route.post('users/register', () => {
//   return { message: 'usuario registrado' }
// })

Route.group(() => {
  // Route.post('api/v1/users/register', 'UserController.store')
  Route.post('users/register', 'UserController.store')
}).prefix('api/v1')

Route.group(() => {
  // Route.post('api/v1/users/register', 'UserController.store')
  Route.post('users/register', 'UserController.store')
}).prefix('api/v2')
