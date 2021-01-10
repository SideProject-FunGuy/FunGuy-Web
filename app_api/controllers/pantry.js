const mongoose = require('mongoose');
const Food = mongoose.model('Food');
const axios = require('axios');

const BASE_URL = `https://shelf-life-api.herokuapp.com`;
const db = mongoose.connection;

const pantryList = async(req, res)=>{
  try{
    const response = await axios({
      method: 'GET',
      url: BASE_URL + `/search`,
      headers: {
        "content-type":"application/x-www-form-urlencoded"
      },
      params: {
        q:`broccoli`
      }
    })
    .then(response=>{
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

const pantryItem = async(req, res)=>{
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

const addPantryItem = async(req, res)=>{
  // console.log('called add pantry item');
  // let foodDocument = new Food({
  //   id: "18360",
  //   name: "Spaghetti Sauce / Pasta Sauce, Cream-Based, Commercially Canned or Bottled - Opened"
  // });
  // console.log(foodDocument);
  // foodDocument.save(function(err, food){
  //   if(err) return console.error(err);
  //   console.log(food.name +'saved');
  // });

};

const deletePantryItem = async(req, res)=>{

};

const updatePantryItem = async(req, res)=>{

};

module.exports={
  pantryList,
  pantryItem,
  addPantryItem,
  deletePantryItem,
  updatePantryItem
}
