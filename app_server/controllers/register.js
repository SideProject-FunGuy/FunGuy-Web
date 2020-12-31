const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

/* GET 'register' page */
const register = (req, res)=>{
  res.render('register', {title: 'Register'});
};

module.exports = {
  register
};
