const router = require('express-promise-router')();
const TransactionController = require('../components/transactions/transactionController');

router.post('/clients/:id/transactions', (req, res) => {
  const clientId = req.params.id;
  const {} = req.body;
  const transactionController = new TransactionController();
  const transaction = transactionController.createTransaction(clientId);
  res.status(201).json(Transaction)
});

router.get('/clients/:id/transactions', (req, res) => {
  const clientId = req.params.id;
  const transactionController = new TransactionController();
  const transactions = transactionController.getTransactions(clientId);

  res.status(201).json(transactions);
});

module.exports = router;
