const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const axios = require('axios');
const BASE_URL = `https://shelf-life-api.herokuapp.com`;

const getCompatibility = (query) => axios({
  method:"GET",
  url : BASE_URL + `/search/`,
  headers: {
      "content-type":"application/x-www-form-urlencoded"
  },
  params: {
      q: query
  }
});

const foodsList = (req, res, callback)=>{
  const asyncApiCall = async () => {
      const response = await this.getCompatibility('Parsley');
      console.log(response);
  }
  try {
    asyncApiCall();
    res
     .status(200)
     .json(response);
  } catch (err) {
    res
     .status(404)
     .json(err);
  }
};


const foodSearch = (req, res, callback)=>{

};

const foodsCreateOne = (req, res, callback)=>{

};

const foodsReadAll = (req, res, callback)=>{


};

const foodsReadByType = (req, res, callback)=>{


};

const foodReadOne = (req, res, callback)=>{

};


module.exports = {
  foodSearch,
  foodsCreateOne,
  foodsReadAll,
  foodsReadByType,
  foodReadOne,
  foodsList
};
