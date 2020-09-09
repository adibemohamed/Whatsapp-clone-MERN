// importing
const express = require('express');
const mongoose = require('mongoose');



// app config 
const app = express()
const port = process.env.PORT || 9001

//middlaware

// DB config
const connection_url = 'mongodb+srv://admin:scaYBOiMAv1bVNAm@cluster0.kwzje.mongodb.net/Whatsapp-mern-db?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// ????

// api routes 
app.get('/', (req, res) => res.status(200).send('hello world'))

// listen
app.listen(port, () => console.log(`Listen on localhost:${port}`));