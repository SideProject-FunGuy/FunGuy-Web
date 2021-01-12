const express = require('express');
const router = express.Router();
const ctrlPantry = require('../controllers/pantry');
const ctrlSearch = require('../controllers/search');

router
   .route('/pantry')
   .get(ctrlPantry.pantryList);

router
  .route('/pantry/:item')
  .get(ctrlPantry.pantryItem);

router
  .route('/search/:search')
  .get(ctrlSearch.searchList);

router
  .route('/guides/:item')
  .get(ctrlSearch.searchItem)

router
  .route('/new')
  .post(ctrlPantry.addPantryItem);

module.exports = router;
