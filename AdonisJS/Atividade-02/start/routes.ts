/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('home')
}).as('home');

Route.get('/about', async ({ view }) => {
  return view.render('about')
}).as('about');

Route.get('/services', async ({ view }) => {
  return view.render('services')
}).as('services');

Route.get('/portfolio', async ({ view }) => {
  return view.render('portfolio')
}).as('portfolio');

Route.get('/team', async ({ view }) => {
  return view.render('team')
}).as('team');