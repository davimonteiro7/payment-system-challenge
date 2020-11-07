const Transaction = require('./transaction.js');
const CreditCard = require('../credit-card/creditCard');
const {insert} = require('./transactionDAO');


class TransactionController{
  
  insertTransaction(amount, creditcardData, clientId){
    const creditCard = new CreditCard(creditcardData);
    this._transaction = new Transaction(amount, creditCard, clientId);
    
    return new Promise((resolve, reject) => {
      insert(this._transaction, (error, result) => {
        if(error){
          console.log(error);
          return reject(error);
        }
        else {
          return resolve({
            "_id": result.ops[0]._id,
            "amount": result.ops[0]._amount,
            "result": result.ops[0].result,
            "cc_token": result.ops[0].cc_token,
            "client_id": result.ops[0]._clientId
          });
        }
      })
    })
  }
}

module.exports = TransactionController;