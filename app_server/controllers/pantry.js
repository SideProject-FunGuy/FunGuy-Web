const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

/* Render pantry list */
const renderPantryList = (req, res, data)=>{
  res.render('pantry',
    {
      title: 'Welcome to your pantry',
      foods: data
    }
  );
};

/* GET pantry list page. */
const pantryList = (req, res)=>{
  const path = '/api/pantry';
  const requestOptions = {
    url:`${apiOptions.server}${path}`,
    method: 'GET',
    json:{}
  };
  request(
    requestOptions,
    (err, {statusCode}, body)=>{
      let data = body;
      renderPantryList(req, res, data);
    }
  );
};

/* Render pantry item detail */
const renderPantryItemDetail = (req, res, data)=>{
  res.render('pantry-item',
    {
      title: 'Pantry Item Detail',
      food: data
    }
  )
}

/* GET pantry food item detail page. */
const pantryItemDetail = (req, res)=>{
  const path = `/api/pantry/${req.params.item}`;
  const requestOptions = {
    url:`${apiOptions.server}${path}`,
    method: 'GET',
    json:{}
  };
  request(
    requestOptions,
    (err, {statusCode}, body)=>{
      let data = body;
      renderPantryItemDetail(req, res, data);
    }
  );
};


module.exports = {
  pantryList,
  pantryItemDetail
};
