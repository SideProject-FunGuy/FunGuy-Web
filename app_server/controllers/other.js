const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

/* GET splash page. */
const splash = (req, res)=>{
  res.render('splash');
};

/* GET register page. */
const register = (req, res)=>{
  res.render('register')
};

/* GET login page. */
const login = (req, res)=>{
  res.render('login')
};

const search = (req, res)=>{
  res.render('search',
  {
    title: 'Search for an item'
  })
};

/* Get search results */
const searchResult = (req, res)=>{
  let search = req.params.search;
  const path = '/api/search/'+search;
  console.log(path);
  const requestOptions = {
    url:`${apiOptions.server}${path}`,
    method: 'GET',
    json:{}
  };
  request(
    requestOptions,
    (err, {statusCode}, body)=>{
      let data = body;
      console.log(data);
      renderSearchResult(req, res, data);
    }
  );
};

/* Render search result page. */
const renderSearchResult = (req, res, data)=>{
  res.render('searchResult',
  {
    title: 'Search Results',
    foods: data
  })
}

/* GET search food item detail page. */
const searchItemDetail = (req, res)=>{
  const path = `/api/guides/${req.params.item}`;
  const requestOptions = {
    url:`${apiOptions.server}${path}`,
    method: 'GET',
    json:{}
  };
  request(
    requestOptions,
    (err, {statusCode}, body)=>{
      let data = body;
      renderSearchItemDetail(req, res, data);
    }
  );
};


/* Render search food item detail */
const renderSearchItemDetail = (req, res, data)=>{
  res.render('search-item',
    {
      title: 'Search Item Detail',
      food: data
    }
  )
}


module.exports = {
  splash,
  register,
  login,
  search,
  searchResult,
  searchItemDetail
};
