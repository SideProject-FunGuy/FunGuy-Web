const axios = require('axios');
const mongoose = require('mongoose');
const querystring = require('querystring');
const Food = mongoose.model('Food');

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

const defaultFoodsList = async (req, res)=>{
  try {
    let res = await axios({
      method:"GET",
      url : BASE_URL + `/search`,
      headers: {
          "content-type":"application/x-www-form-urlencoded"
      }
    })
    .then((response)=>{
      console.log(response);
    });
  } catch (err) {
    console.error(err);
  }
};


const foodsCreateOne = (req, res, callback)=>{

};


const foodReadOne = (req, res, callback)=>{

};


module.exports = {
  foodsCreateOne,
  foodReadOne,
  foodsList,
  defaultFoodsList
};
