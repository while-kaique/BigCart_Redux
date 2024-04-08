require('dotenv').config({path:'variaveis.env'})
require('./db')

const pictureRouter = require('../routes/picture')

const express= require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/pictures', pictureRouter)
app.use('/files/', express.static('uploads'))

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
})