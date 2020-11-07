const router = require('express-promise-router')();

const TransactionController = require('../components/transactions/TransactionController');
const ClientController = require('../components/clients/clientController.js');


router.post('/clients/:id/transactions', async (req, res) => {
  const clientId = req.params.id;
  const {amount, creditcard} = req.body;
  
  const transactionObj = await TransactionController.insertTransaction(amount, creditcard, clientId);
  await clientController.addTransaction(clientId, transactionObj);
  res.status(201).json(transactionObj);
});

router.get('/clients/:id/transactions', async (req, res) => {
  const clientId = req.params.id;
  const client = await clientController.getClientById(clientId);

  console.log("TRANSACTIONS: ", client.transactions);

  res.status(200).json(client.transactions);
})

module.exports = router;