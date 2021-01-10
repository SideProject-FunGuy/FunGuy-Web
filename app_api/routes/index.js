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
//
// router
//   .route('/login')
//   .post(ctrlLogin.userLogin);
//
// router
//   .route('/users')
//   .get(ctrlUsers.getUsers);
//
// router
//   .route('/food')
//   .get(ctrlFoods.foodsList);
//
// router
//   .route('/search')
//   .get(ctrlSearch.search);
//
// router
//   .route('/pantry')
//   .get(ctrlPantry.search)

module.exports = router;
