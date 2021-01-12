const mongoose = require('mongoose');
const Food = mongoose.model('Food');
const axios = require('axios');

const BASE_URL = `https://shelf-life-api.herokuapp.com`;
const db = mongoose.connection;

// const pantryList = async(req, res)=>{
//   try{
//     const response = await axios({
//       method: 'GET',
//       url: BASE_URL + `/search`,
//       headers: {
//         "content-type":"application/x-www-form-urlencoded"
//       },
//       params: {
//         q:`broccoli`
//       }
//     })
//     .then(response=>{
//       res
//         .status(200)
//         .json(response.data)
//     })
//   } catch(err) {
//       res
//         .status(404)
//         .json(err)
//   }
// };


const pantryList = async(req, res)=>{
  let foods = [];
  Food
    .find()
    .exec((err, thesefoods)=>{
      if(!thesefoods){
        console.log('No foods found');
        return res
          .status(404)
          .json({"message": "Foods not found"});
      } else {
        foods = thesefoods
        return res
          .status(200)
          .json(foods);
      }
    });
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

const addPantryItem = (req, res)=>{
  Food.create({
    name: req.body.name,
    expiryDuration: req.body.expiryDuration,
    expiryDate: req.body.expiryDate,
    category: req.body.category
  },
  (err, food)=>{
    if(err){
      res
        .status(400)
        .json(err);
    } else {
      res
        .status(201)
        .json(food);
    }
  });

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
