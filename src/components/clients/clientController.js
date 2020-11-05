const Client = require('./client');
const {insert, findOne} = require('./clientDAO');
class ClientController{
  constructor(){
  }

  createClient(firstName, lastName, email){
    this._client = new Client(firstName, lastName, email);
    
    return new Promise((resolve, reject) => {
        insert(this._client, (error, result) => {
          if(error){
            console.log(error);
            reject(error);
          }
          console.log(result.ops[0]);
          resolve({
            "first_name": result.ops[0].first_name,
            "last_name": result.ops[0].last_name,
            "email": result.ops[0].email,
            "createdAt": result.ops[0].createdAt,
            "_id": result.ops[0]._id
          });  
        })
      });
  }

  getClientById(clientId){
    return new Promise((resolve, reject) => {
        findOne(clientId, (error, result) => {
          if(error) reject(error);
          console.log(result);
          resolve({
            "fullname":result[0].first_name + " " + result[0].last_name,
            "email":result[0].email, 
            "createdAt": result[0].createdAt, 
            "_id": result[0]._id
          });
        })
    });
  }
}

module.exports = ClientController;