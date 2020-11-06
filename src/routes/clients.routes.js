const router = require('express-promise-router')();

const ClientController = require('../components/clients/clientController.js');
const clientController = new ClientController();

router.post('/clients', async (req, res) => {
  const {firstName, lastName, email} = req.body;
  
  try {
    const client = await clientController.createClient(firstName, lastName, email);
    console.log(client);
    res.status(200).json(client);  
  
  } catch (error) {
    res.status(500).send(error.message);
  }
  
});

router.get('/clients/:id', async (req, res) => {
  const clientId = req.params.id;
  try{
    const client = await clientController.getClientById(clientId);
    console.log(client);
    res.status(201).json(client);
  }
  catch(error){
    console.log(error.message)
    res.status(500).send(error.message + "\n");
  }
  

  

});

module.exports = router;



  

