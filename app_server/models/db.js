const mongoose = require('mongoose');
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wktan.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('connected to Mongodb');
  client.close();
});
