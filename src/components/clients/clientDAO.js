const ObjectId = require("mongodb").ObjectID;
const Database = require('../../infra/database');

function insert(client, callback){
    Database.getConnection().then(conn => {
      conn.collection("clients").insertOne(client, callback);
    });
}

function findAll(callback){
  Database.getConnection().then(conn => {
    conn.collection("clients").find({}).toArray(callback);
  });
}
 
function findOne(id, callback){  
  Database.getConnection().then(async conn => {
    await conn.collection("clients").findOne(new ObjectId(id), callback);
  });
}

function update(id, newFieldData, callback){
  Database.getConnection().then(conn => {
    conn.collection("clients").updateOne({_id: new ObjectId(id)}, {$set: {"transactions": newFieldData}}, callback);
  });
}

function deleteOne(id, callback){
  Database.getConnection().then(conn => {
    conn.collection("clients").deleteOne({_id: new ObjectId(id), callback})
  });
}

module.exports = { insert, findOne, findAll, update, deleteOne };