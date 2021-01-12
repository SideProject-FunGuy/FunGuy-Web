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
  "expiryDate": Date,
  "category": String,
  "status": {
    type: String,
    default: "Fresh"
  }
});

Date.prototype.addDays = function(days){
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

foodSchema.set({getters: true, virtuals: true});

mongoose.model('Food', foodSchema);
