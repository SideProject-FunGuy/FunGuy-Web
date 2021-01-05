const mongoose = require('mongoose');

const pantrySchema = new mongoose.Schema({
  "owner": {
    'type': mongoose.Schema.ObjectId,
    'ref': 'User'
  },
  "food_name": String,
  "food_tips": [String],
  "expirationString": String,
  "expirationTime": Number,
  "pantryExpirationDate":{
    'type': Date,
    'default': Date.now
  },
  "createdOn": {
    'type': Number,
    'default': Date.now
  }
});

pantrySchema.virtual('status').get(function(){
  if (this.pantryExpirationDate > 259200000){
    return "Fresh";
  } else if (this.pantryExpirationDate< 259200000){
    return "Use soon";
  } else {
    return "Expired";
  }
});

pantrySchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('Pantry', pantrySchema);
