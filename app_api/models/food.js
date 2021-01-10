const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  "food_id": String,
  "food_name": String,
  "url": String
});

mongoose.model('Food', foodSchema);
