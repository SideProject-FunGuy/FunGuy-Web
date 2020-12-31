const express = require('express');
const router = express.Router();
const ctrlRegister = require('../controllers/register');
const ctrlLogin = require('../controllers/login');
const ctrlUsers = require('../controllers/users');
const ctrlFoods = require('../controllers/foods');

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
  .route('/foods')
  .get(ctrlFoods.foodsList);

module.exports = router;
