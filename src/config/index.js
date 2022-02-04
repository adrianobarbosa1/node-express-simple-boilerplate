const PORT = require('../server')

module.exports = {
  // secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : "WREFFEFD8FEWF231FEW64654FEWf354doihfeonkf564F",
  api: process.env.NODE_ENV === 'production' ? "https://api.anapolis.go.gov.br/apirh" : `http://localhost:${PORT}`,
 // loja: process.env.NODE_ENV === 'production' ? "firebase" : 'http://localhost:8000',
}