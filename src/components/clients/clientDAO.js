const ObjectId = require("mongodb").ObjectID;
const database = require('../../infra/database');

const conn = database.getConnection();

function findAll(callback){
  conn.collection("clients").find({}).toArray(callback);
}

function insert(client, callback){
  conn.collection("clients").insert(client, callback);
}

 
function findOne(id, callback){
  conn.collection("clients").find(new ObjectId(id)).toArray(callback);
}

function update(id, client, callback){
  conn.collection("clients").updateOne({_id: new ObjectId(id)}, {$set: client}, callback)
}

function deleteOne(id, callback){
  conn.collection("clients").deleteOne({_id: new ObjectId(id), callback})
}

module.exports = { findAll, insert, findOne, update, deleteOne };