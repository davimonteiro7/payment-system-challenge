const app = require('../../app');
require('dotenv').config()

const port = process.env.PORT || 3000; 

app.listen(port, (req, res) => {
    console.log(`Listening at port ${port}.`);
});

