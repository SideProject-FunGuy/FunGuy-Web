const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  "name": {
    type: String,
    required: true
  },
  "created": {
    type: Date,
    default: Date.now
  },
  "expiryDuration": String,
  "expiryDate": String,
  "status": {
    enum:[
      "Fresh",
      "Use Soon",
      "Expired",
      null
    ]
  },
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
