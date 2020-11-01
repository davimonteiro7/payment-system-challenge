const router = require('express-promise-router')();
const ClientController = require('../components/clients/clientsController');

router.post('/clients', (req, res) => {
  
  const {firstName, lastName, email} = req.body;
  const clientController = new ClientController();
  const client = clientController.createClient(firstName, lastName, email);
  res.status(201).json(client)
});

router.get('/clients/:id', (req, res) => {
  const clientId = req.params.id;
  const clientController = new ClientController();
  const client = clientController.getClientById(clientId);

  res.status(201).json(client);

});

module.exports = router;
