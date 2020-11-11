const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');

const config = require('./config/key');
const { User } = require('./models/User');


app.use(bodyParser.urlencoded({extended:true})); //application / x-www-form-urlencoded
app.use(bodyParser.json()); //application/json 분석해서 가져오기 위해


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(config.mongoURI, {//쓰지 않으면 에러가 많이 뜨기 때문에 써주는 게 좋다.
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() => console.log('mongoDB connected ㅇㅇㅇ'))
    .catch( error => {console.log(error)});

app.get('/', (req, res) => {
  res.send('node 시작 졸리지만 파이팅')
})

app.post('/register', (req, res) => {
  //회원가입할 때 필요한 정보들을 client(브라우저)에서 가져오면 그것들을 DB에 넣는다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success:true
    }) //200은 성공
  }) //mongoDB에서 오는 메서드
})


app.listen(port, () => {
  console.log(`앱 실행 중 at http://localhost:${port}`)
})