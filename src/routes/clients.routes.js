const router = require('express-promise-router')();
const ClientController = require('../components/clients/clientsController.js');
const Transaction = require('../components/transactions/transaction.js')

router.post('/clients', (req, res) => {
  
  const {firstName, lastName, email} = req.body;
  const clientController = new ClientController();
  const client = clientController.createClient(firstName, lastName, email);
  const transaction = new Transaction(150, {cc_token: "ASG424GDFG234"});
  client.addTransactions(transaction);
  res.status(201).json(client);
});

router.get('/clients/:id', (req, res) => {
  const clientId = req.params.id;
  const clientController = new ClientController();
  const client = clientController.getClientById(clientId);

  res.status(201).json(client);

});

module.exports = router;



  

