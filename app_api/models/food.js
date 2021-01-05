const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  "food_id": String,
  "food_name": String,
  "food_location": String,
  "food_tips": [String],
  "expirationString": String,
  "expirationTime": Number,
  "category": {
    'type': String,
    'enum': [
      'Fruits',
      'Vegetables',
      'Dairy',
      'Meat & Poultry',
      'Fish & Shellfish',
      'Nuts, Grains & Pasta',
      'Condiments & Oils',
      'Snacks & Baked Goods',
      'Beverages',
      'Herbs & Spices',
      null
    ],
    'default': null
  }
});

mongoose.model('Food', foodSchema);
