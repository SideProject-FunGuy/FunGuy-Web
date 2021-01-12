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
  "category": String
});

Date.prototype.addDays = function(days){
  var date = new Date(this.valueOf());
  date.setDate(date.getDate()+days);
  return date;
}

foodSchema.virtual('status').get(function(){
  var fresh = this.created;
  fresh.addDays(3);

  if(this.expiryDate <= this.created ){
    return "Expired"
  } else if(this.expiryDate > this.fresh) {
    return "Fresh"
  }
})

foodSchema.set({getters: true, virtuals: true});

mongoose.model('Food', foodSchema);
