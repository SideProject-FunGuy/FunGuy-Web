const mongoose = require('mongoose');
const readLine = require('readline');
const MongoClient = require('mongodb').MongoClient;

let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wktan.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = 'funguy';

async function run(){
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // const col = db.collection('users');
    //
    // let personDocument = {
    //   "email": "test4@hotmail.com"
    // }
    //
    // const p = await col.insertOne(personDocument);
    //
    // const myDoc = await col.findOne();
    //
    // console.log(myDoc);

  } catch (err) {
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}

run().catch(console.dir);


require('./users');
