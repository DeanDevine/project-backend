const ENV = process.env.NODE_ENV || 'development';
const mongoose = require("mongoose");

require('dotenv').config({
  path: `${__dirname}/.env.${ENV}`,
});

if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL not set');
} 

const {MONGO_URL} = process.env;


///mongoose.connect(DATABASE_URL,{ dbName: 'testdb',useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect(MONGO_URL)
.catch((err) => { console.error(err); });


module.exports = mongoose;




//module.exports = MONGO_URL;


