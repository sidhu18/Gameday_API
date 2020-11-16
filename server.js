require('dotenv').config();
const database = require('./config/db');

database.connect();

//Bring in the models
require("./models/userModel");

const app = require('./app');

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Listening on port " + port);
});

