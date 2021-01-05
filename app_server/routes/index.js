const express = require('express');
const router = express.Router();
const ctrlSplash = require('../controllers/splash');
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');
const ctrlFoods = require('../controllers/foods');
const ctrlSearch = require('../controllers/search');

/* GET home page. */
router.get('/', ctrlSplash.splash);

/* GET login page. */
router.get('/login', ctrlLogin.login);

/* GET register page. */
router.get('/register', ctrlRegister.register);

/* GET food info page. */
router.get('/food', ctrlFoods.foodInfo);

/* GET search page. */
router.get('/search', ctrlSearch.search);

/* GET search results page. */
router.get('/result', ctrlSearch.searchResult);

module.exports = router;
