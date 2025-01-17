require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.get('/api/houses', ctrl.getHouses)
app.post('/api/add', ctrl.addHouse)
app.delete('/api/delete/:id', ctrl.deleteHouse)

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('db connected')
    })
    .catch(err => console.log(err))

app.listen(SERVER_PORT, console.log(`Running on port: ${SERVER_PORT}`))