const mongoose = require('mongoose');
const Food = mongoose.model('Food');
const axios = require('axios');

const BASE_URL = `https://shelf-life-api.herokuapp.com`;

const searchList = async(req, res)=>{
  let search = req.params.search;
  console.log(search);
  try{
    const response = await axios({
      method: 'GET',
      url: BASE_URL + `/search`,
      headers: {
        "content-type":"application/x-www-form-urlencoded"
      },
      params: {
        q:search
      }
    })
    .then(response=>{
      console.log(response.data);
      res
        .status(200)
        .json(response.data)
    })
  } catch(err) {
      res
        .status(404)
        .json(err)
  }
};

const searchItem = async(req, res)=>{
  let item = req.params.item
  try{
    const response = await axios({
      method:'GET',
      url: BASE_URL + `/guides/` + item
    })
    .then(response=>{
      res
        .status(200)
        .json(response.data)
    })
  } catch(err){
      res
        .status(404)
        .json(err)
  }
};



module.exports={
  searchList,
  searchItem
}
