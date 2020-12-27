const mongoose = require('mongoose');
const User = mongoose.model('User');

const getUsers = async (req, res)=>{
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = {
  getUsers
};
