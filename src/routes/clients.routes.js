const router = require('express-promise-router')();

const ClientController = require('../components/clients/clientController.js');
const clientController = new ClientController();

router.post('/clients', async (req, res) => {
  const {firstName, lastName, email} = req.body;
  
  const client = await clientController.createClient(firstName, lastName, email);
  console.log(client);
  res.status(201).json(client);
  
});

router.get('/clients/:id', async (req, res) => {
  const clientId = req.params.id;
  const client = await clientController.getClientById(clientId);

  console.log(client);
  res.status(201).json(client);

});

module.exports = router;



  

