const express = require('express');
const router = express.Router();

const ctrlPantry= require('../controllers/pantry');
const ctrlOther = require('../controllers/other');

/* GET food info page. */
router.get('/', ctrlOther.splash);
router.get('/register', ctrlOther.register);
router.get('/login', ctrlOther.login);

router.get('/pantry', ctrlPantry.pantryList);
router.get('/pantry/:item', ctrlPantry.pantryItemDetail);

router.get('/search', ctrlOther.search);
router.get('/search/:search', ctrlOther.searchResult);
router.get('/guides/:item', ctrlOther.searchItemDetail);

module.exports = router;
