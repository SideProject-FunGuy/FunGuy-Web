/* GET home page. */
const index = (req, res)=>{
  res.render('index', { title: 'Welcome to funguy'});
};
module.exports = {
  index
};
