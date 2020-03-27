const express = require('express')
const app = express()
const {errors} = require('celebrate') //Apresenta os erros das validações
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors()) //Apresenta os erros das validações

module.exports = app