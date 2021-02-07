const express = require('express');
const app = express();
const port = 5000; //back server

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fronthan:happy30ryan@cluster0.1aald.mongodb.net/node-react?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify:false
}).then(()=> console.log('MongoDB 연결됨')).catch((err => {console.log(err)}));

app.get('/', (req, res) => res.send("hello world!"));

app.listen(port, () => console.log(`example app listening on port ${port}!`))