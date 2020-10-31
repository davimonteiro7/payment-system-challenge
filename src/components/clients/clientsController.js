class ClientsController{
  constructor(){

  }
// later implement logic to get and set to APIs
  insertClient(firstName, lastName, email){
    const client = {};
    return client;
  }

  getClientById(clientId){
    const client = {};
    return client;
  }

  getTransactions(clientId){
    const transactions = [];
    return transactions;
  }

  setTransaction(clientId){
    const transactionObj = {};
    return transactionObj;
  }

  getCards(clientId){
    const cards = [];
    return cards;
  }
  
  setCard(clientId){
    const cardObj = {};
    return cardObj;
  }
}

module.exports = ClientsController;