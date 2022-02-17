const express = require('express')
const morgan = require('./config/morgan')
const config = require('./config/config')
const cors = require('cors')
const compression = require('compression')
const app = express()

//DEVELOPMENT
const isProduction = process.env.NODE_ENV === 'production'

//SETUP BODY PARSER
app.use(express.urlencoded({ extended: true, limit: 1.5 * 1024 * 1024 }));
app.use(express.json({ limit: 1.5 * 1024 * 1024 }));

//CONFIG
if(config.env !== 'test'){
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler)
}

//ENABLE CORS
app.use(cors());
app.options('*', cors());

app.disable('x-powered-by')

//GZIP COMPRESSION
app.use(compression())

module.exports = app