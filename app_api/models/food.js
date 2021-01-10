const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  "id": String,
  "name": String,
  "location": String,
  "expiration": String,
  "expirationTime": Number,
  "tips": String,
  "status": {
    enum:[
      "Fresh",
      "Use Soon",
      "Expired",
      null
    ]
  },
  "expiry": Number,
  "category": {
    enum:[
      "Fruits",
      "Vegetables",
      "Meat & Poultry",
      "Fish & Shellfish",
      "Nuts, Grains & Pasta",
      "Condiments & Oils",
      "Snacks & Baked Goods",
      "Beverages",
      "Herbs & Spices",
      null
    ]
  }
});

mongoose.model('Food', foodSchema);
