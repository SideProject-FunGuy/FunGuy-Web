const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

/* GET 'login' page */
const login = (req, res)=>{
  res.render('login', {title: 'Login'});
};

module.exports = {
  login
};
