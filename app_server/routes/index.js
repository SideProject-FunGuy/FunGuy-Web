const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET login page. */
router.get('/login', ctrlLogin.login);

/* GET register page. */
router.get('/register', ctrlRegister.register);

module.exports = router;
