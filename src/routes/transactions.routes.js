const router = require('express-promise-router')();

const TransactionController = require('../components/transactions/transactionController');
const transactionController = new TransactionController();

const ClientController = require('../components/clients/clientController.js');
const clientController = new ClientController();

router.post('/clients/:id/transactions', async (req, res) => {
  const clientId = req.params.id;
  const {amount, creditcard} = req.body;
  
  const transactionObj = await transactionController.insertTransaction(amount, creditcard, clientId);
  await clientController.addTransaction(clientId, transactionObj);

  console.log("TRANSACTION OBJ: ", transactionObj);

  res.status(201).json(transactionObj);
});

module.exports = router;