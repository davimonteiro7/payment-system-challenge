const Client = require('./client');

class ClientController{
  constructor(){
  }
// later implement logic to get and set to APIs
  createClient(firstName, lastName, email){
    this._client = new Client(firstName, lastName, email);
    return this._client;
  }

  getClientById(clientId){
    const client = {id: clientId,
                    value: "Inner on getClientById(clientId)"};
    return client;
  }
}

module.exports = ClientController;