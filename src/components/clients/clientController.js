const Client = require('./client');
const {insert} = require('./clientDAO');
class ClientController{
  constructor(){
  }
// later implement logic to get and set to APIs
  createClient(firstName, lastName, email){
    this._client = new Client(firstName, lastName, email);
    
    insert(this._client, (error, result) => {
      if(error) {return console.log(error)}
    })
    return this._client;
  }

  getClientById(clientId){
    const client = {id: clientId,
                    value: "Inner on getClientById(clientId)"};
    return client;
  }
}

module.exports = ClientController;