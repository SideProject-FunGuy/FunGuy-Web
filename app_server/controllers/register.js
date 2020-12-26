/* GET 'register' page */
const register = (req, res)=>{
  res.render('register', {title: 'Register'});
};

module.exports = {
  register
};
