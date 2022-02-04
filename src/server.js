const express = require('express')
const config = require('./config/config')
const app = require('./app')



//LISTEN
app.listen(config.port, () => {
  console.log(`Rodando na porta ${config.port}`)
})
