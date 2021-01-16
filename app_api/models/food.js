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
  "category": String,
  "status": {
    type: String,
    default: "Fresh"
  },
  "status": {
    type: String,
    default: function(){
      let splitString = this.expiryDuration.split(" ");
      let days = parseInt(splitString[0]);
      if (days==0){
        return "Expired"
      } else if(days<4){
        return "Use Soon"
      } else {
        return "Fresh"
      }
    }
  }
});

Date.prototype.addDays = function(days){
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

foodSchema.set({getters: true, virtuals: true});

mongoose.model('Food', foodSchema);
