const axios = require('axios');
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production'){
  apiOptions.server = '';
}

axios.interceptors.request.use(req=>{
  console.log(`${req.method} ${req.url}`);
  return req;
});

/* GET 'Search results' */
const renderSearch = (req, res, responseBody)=>{
    res.render('search', {
      results: responseBody
    });
};

/* GET 'Search' page */
const search = async (req, res)=>{
  const path = '/api/search';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, response, body)=>{
      renderSearch(req, res, body);
    }
  );
};


const foodsList = async (req, res)=>{
  try {
    let res = await axios({
      method:"GET",
      url : BASE_URL + `/search`,
      headers: {
          "content-type":"application/x-www-form-urlencoded"
      },
      params: {
          q: req.params.food
      }
    })
    .then((response)=>{
      console.log(response);
    });
  } catch (err) {
    console.error(err);
  }
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
  renderSearch,
  searchResult
};
