const mongoose = require('mongoose');
const User = mongoose.model('User');

const getUsers = (req, res, callback)=>{
  User.find({}, (err, user)=>{
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });

};

module.exports = {
  getUsers
};
