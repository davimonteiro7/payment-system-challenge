const mongoClient = require('mongodb').MongoClient;

class Database {
  constructor(){
    
  }
  async getConnection(){
    return await mongoClient.connect("mongodb://localhost", {useUnifiedTopology: true})
           .then(conn => conn.db("paymentSystem"))
           .catch(err => console.log(err));
  }
}


module.exports = new Database();


