const mongoose = require('mongoose');
const querystring = require('querystring');
const Food = mongoose.model('Food');

const axios = require('axios');
const BASE_URL = `https://shelf-life-api.herokuapp.com`;


const foodsList = async (req, res)=>{
  try {
    let res = await axios({
      method:"GET",
      url : BASE_URL + `/search`,
      headers: {
          "content-type":"application/x-www-form-urlencoded"
      },
      params: {
          q: params
      }
    })
    .then((response)=>{
      console.log(response);
    });
  } catch (err) {
    console.error(err);
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
