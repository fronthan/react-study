const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { User } = require('./models/User');
const { auth } = require('./middleware/auth');

app.use(bodyParser.urlencoded({extended:true})); //application / x-www-form-urlencoded
app.use(bodyParser.json()); //application/json 분석해서 가져오기 위해

app.use(cookieParser());

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(config.mongoURI, {//쓰지 않으면 에러가 많이 뜨기 때문에 써주는 게 좋다.
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() => console.log('mongoDB 연결됨'))
    .catch( error => {console.log(error)});

app.get('/', (req, res) => {
  res.send('node 시작, 오늘은 목요일')
})

app.get('/api/hello', (req, res)=> {
  res.send("안녕하세욤")
})

app.post('/api/users/register', (req, res) => {
  //회원가입할 때 필요한 정보들을 client(브라우저)에서 가져오면 그것들을 DB에 넣는다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success:true
    }) //200은 성공
  }) //mongoDB에서 오는 메서드
})

app.post('/api/users/login', (req, res) => {
  //요청된 이메일을 데이터베이서에서 있는지 찾는다.
  User.findOne({ email:req.body.email }, ( err, user ) => {
    if ( !user ) {
      return res.json({
        loginSuccess : false,
        message: "이메일에 해당하는 유저가 없습니다."
      })
    }

    //DB에 요청된 이메일이 있다면, 비번이 맞는지 확인한다.
    //comparePassword는 직접 만드는 메서드
    //'user' 에는 찾은 것의 정보가 들어있다.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) {
        return res.json({
          loginSuccess:false,
          message:"비밀번호가 틀렸습니다"  
        })
      }

      //비번까지 맞다면 token 생성 (토큰 생성 이름은 아무거나 - generateToken)
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        
        //토큰을 저장한다. 쿠키 or 로컬스토리지
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess:true, userId:user._id })
      })
    })
  })
});



app.get('/api/users/auth', auth, (req, res)=> {
  //미들웨어, 엔드포인트(/api/users/~)에서 받아서 (req,res)로 가기 전에 auth에서 일을 한다.

  // 미들웨어를 통과해서 이곳까지 왔다는 것은 authentication 가 True라는 말
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name:req.user.name,
    lastname:req.user.lastname,
    role:req.user.role,
    image: req.user.image
  })

})


app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, {token: ""}, (err, user) => {
      if(err) return req.json({ success: false, err });
      return res.status(200).send({
        success:true
      })
    })
})

app.listen(port, () => {
  console.log(`앱 실행 중 at http://localhost:${port}`)
})