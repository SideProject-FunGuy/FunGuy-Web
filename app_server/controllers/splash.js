const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

/* GET home page. */
const splash = (req, res)=>{
  res.render('splash', { title: 'Welcome to funguy'});
};
module.exports = {
  splash
};
