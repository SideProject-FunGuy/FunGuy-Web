const axios = require('axios');
const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const BASE_URL = `https://shelf-life-api.herokuapp.com`;

const foodsList = async (req, res)=>{
  try {
    const results = await axios({
      method:"GET",
      url : BASE_URL + `/search`,
      headers: {
          "content-type":"application/x-www-form-urlencoded"
      },
      params: {
          q: `broccoli`
      }
    });
    const foods = results.map(result=> {
      return{
        food_id: result.id,
        food_name: result.name
      }
      console.log(foods);
    });
    res
      .status(200)
      .json(foods);
  } catch (err) {
    res
      .status(400)
      .json(err);
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
