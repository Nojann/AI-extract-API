/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const UsersController = () => import('#controllers/users_controller')

router.resource('users', UsersController).apiOnly()
//.use(['store', 'update', 'destroy'], middleware.auth())

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
