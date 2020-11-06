const ObjectId = require("mongodb").ObjectID;
const Database = require('../../infra/database');

function insert(transaction, callback){
  Database.getConnection().then(conn => {
    conn.collection("transactions").insertOne(transaction, callback);
  });
}

module.exports = {insert};