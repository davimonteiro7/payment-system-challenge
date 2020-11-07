const e = require('express');
const Client = require('./client');
const {insert, findOne, update} = require('./clientDAO');

class ClientController{
  static createClient(firstName, lastName, email){
    this._client = new Client(firstName, lastName, email);
    
    return new Promise((resolve, reject) => {
        insert(this._client, (error, result) => {
          if(error){
            console.log(error);
            return reject(error);
          }
          else {
            return resolve({
              "first_name": result.ops[0].first_name,
              "last_name": result.ops[0].last_name,
              "email": result.ops[0].email,
              "createdAt": result.ops[0].createdAt,
              "_id": result.ops[0]._id
            });
          }
            
        })
      });
  }

  static getClientById(clientId){
    return new Promise((resolve, reject) => {
        findOne(clientId, (error, result) => {    
          if(error){
            return reject(error);
          }
          if(!result){
            return reject(new Error("Client not found! put a valid ClientID"));
          }
          else {
            return resolve(result);
          }
        })
    });
  }

  static async addTransaction(clientId, transaction){
    var client = await this.getClientById(clientId);
    client.transactions.push(transaction); 
    update(clientId, client.transactions, (error, result) => {
        if (error) console.log(error)
    });
  }
}

module.exports = ClientController;