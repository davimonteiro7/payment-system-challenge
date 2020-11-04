const Transaction = require('./transaction.js');

class TransactionController{
  createTransaction(amount, creditCard){
    this._transaction = new Transaction(amount, creditCard);
    return this._transaction;
  }
}

module.exports = TransactionController;