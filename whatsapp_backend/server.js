// importing
import express from 'express'


// app config 
const app = express()
const port = proccess.env.PORT || 9000
//middlaware

// database config

// ????

// api routes 
app.get('/', (req, res) => res.status(200).send('hellow world'))

// listen
app.listen(port, () => console.log(`Listen on localhosr:${port}`));