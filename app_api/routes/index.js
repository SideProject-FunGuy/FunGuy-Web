const express = require('express');
const router = express.Router();
const ctrlPantry = require('../controllers/pantry');
const ctrlSearch = require('../controllers/search');

router
   .route('/pantry')
   .get(ctrlPantry.pantryList);

router
  .route('/pantry/:item')
  .delete(ctrlPantry.deletePantryItem);

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
