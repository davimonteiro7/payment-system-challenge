class TransactionController{
  constructor(){
    
  }
    
  createTransaction(clientId){
      const transactionObj = {};
      return transactionObj;
  }

  getTransactions(clientId){
      const transactions = [{id: clientId,
                             status: "Inner on getTransactions(clientId)"} ];
      return transactions;
  }
}

module.exports = TransactionController;