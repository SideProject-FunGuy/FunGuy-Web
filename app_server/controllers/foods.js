const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

/* GET food info page. */
const foodInfo = (req, res)=>{
  res.render('food-info',
  {
    title: 'Parsley - Fresh, Raw',
    tips: 'Store in fridge',
    expiry: '2 days'
  });
};


module.exports = {
  foodInfo
};
