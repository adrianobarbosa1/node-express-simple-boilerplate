const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const app = express()
const config = require('./config/config')

//DEVELOPMENT
const isProduction = process.env.NODE_ENV === 'production'

//SETUP BODY PARSER
app.use(express.urlencoded({ extended: true, limit: 1.5 * 1024 * 1024 }));
app.use(express.json({ limit: 1.5 * 1024 * 1024 }));

//CONFIG
if (!isProduction) app.use(morgan('dev'))
if (!isProduction) app.use(cors())
app.disable('x-powered-by')
app.use(compression())

//LISTEN
app.listen(config.port, () => {
  console.log(`Rodando na porta ${config.port}`)
})
