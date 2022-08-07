const express = require('express')

const app = express()

app.get('/',(req,res) => {
    console.log('peticion recibida')
    res.send('COLOMBIA')
})

