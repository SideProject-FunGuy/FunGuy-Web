const mongoose = require('mongoose');
const User = mongoose.model('User');

const userCreate = (req, res)=>{
  res
    .status(200)
    .json({"status":"success"});
};

module.exports = {
  userCreate
};
