// importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';

// app config 
const app = express()
const port = process.env.PORT || 9005

//middlaware
app.use(express.json());

// DB config
const connection_url = 'mongodb+srv://admin:scaYBOiMAv1bVNAm@cluster0.kwzje.mongodb.net/Whatsapp-mern-db?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// ????

// api routes 
app.get('/', (req, res) => res.status(200).send('hello world'));

app.get('/api/v1/messages/sync', (req, res) => {
    Messages.find((err, date) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})


app.post('/api/v1/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(`new message created: \n ${data}`);
        }
    })
})




// listen
app.listen(port, () => console.log(`Listen on localhost:${port}`));