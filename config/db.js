
module.exports.connect = function () {
    require('dotenv').config();

    const mongoose = require('mongoose');
    mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    // Connection status
    mongoose.connection.on('error', (err) => {
      console.log("Couldn't connect of DB :" + err.message);
    });
    
    mongoose.connection.once('open', () => {
      console.log("DB Connection successful");
    });

};