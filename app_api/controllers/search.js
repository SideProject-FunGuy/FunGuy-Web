const axios = require('axios');
const mongoose = require('mongoose');
const querystring = require('querystring');
const Food = mongoose.model('Food');

const BASE_URL = `https://shelf-life-api.herokuapp.com`;

const defaultSearch = async (req, res)=>{
  try {
    let res = await axios({
      method:"GET",
      url : BASE_URL + `/search`,
      headers: {
          "content-type":"application/x-www-form-urlencoded"
      },
      params: {
          q: `Parsley`
      }
    })
    .then((response)=>{
      console.log(response.data[0]);
    });
  } catch (err) {
    console.error(err);
  }
};


module.exports = {
  defaultSearch
};
