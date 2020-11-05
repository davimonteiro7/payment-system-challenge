const mongoClient = require('mongodb').MongoClient;

class Database {
  static async getConnection(){
    return await mongoClient.connect("mongodb://localhost", {useUnifiedTopology: true})
           .then(conn => conn.db("paymentSystem"))
           .catch(err => console.log(err));
  }
}

module.exports = Database;


