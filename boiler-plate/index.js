const express = require('express');
const app = express();
const port = 5000; //back server
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');


app.use(bodyParser.urlencoded({extended: true}));//application/x-www-form-urlencoded 로 된 데이터를 분석해서 가져올 수 있게 한다.

app.use(bodyParser.json()); //application/json 타입으로 된 것을 가져올 수 있게 한다.

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify:false
}).then(()=> console.log('MongoDB 연결됨')).catch((err => {console.log(err)}));

app.get('/', (req, res) => res.send("hello world! 새해에도 "));

app.post('/register', (req,res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.json({success:false, err});
        return res.status(200).json({
            success:true
        });
    });
    //save() - mongoDB에서 오는 메소드
});



app.listen(port, () => console.log(`example app listening on port ${port}!`))