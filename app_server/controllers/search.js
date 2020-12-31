const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

/* GET 'Search' page */
const search = (req, res)=>{
  res.render('search', {title: 'Search'});
};

/* GET 'Search results' page */
const searchResult = (req, res)=>{
  res.render('search-result', {
    title: 'Search Results',
    foods: [
    {
      id: 17879,
      name: 'Parsley - Fresh, Raw',
      url: 'https://www.stilltasty.com/fooditems/index/17879'
    },
    {
      id:17880,
      name: 'Parsley Flakes, Dried, Commercially Bottled or Purchased in Bulk',
      url: 'https://www.stilltasty.com/fooditems/index/17880'
    }]
  });
};

module.exports = {
  search,
  searchResult
};
