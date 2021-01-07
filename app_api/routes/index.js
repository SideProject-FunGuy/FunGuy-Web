const express = require('express');
const router = express.Router();
const ctrlRegister = require('../controllers/register');
const ctrlLogin = require('../controllers/login');
const ctrlUsers = require('../controllers/users');
const ctrlFoods = require('../controllers/foods');
const ctrlSearch = require('../controllers/search');

router
  .route('/register')
  .post(ctrlRegister.userCreate);

router
  .route('/login')
  .post(ctrlLogin.userLogin);

router
  .route('/users')
  .get(ctrlUsers.getUsers);

router
  .route('/foods/:food')
  .get(ctrlFoods.foodsList);

router
  .route('/search')
  .get(ctrlSearch.defaultSearch);

module.exports = router;
