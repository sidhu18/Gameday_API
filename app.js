const express = require('express');

const app = express();

// Initialize Express
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Setup error handlers
const errorHandelers = require('./handlers/errorHandlers');
app.use(errorHandelers.notFound);
app.use(errorHandelers.mongoseErrors);
if(process.env.ENV == "DEVELOPMENT"){
    app.use(errorHandelers.developmentErrors);
}else{
    app.use(errorHandelers.productionErrors);
}



module.exports = app;