const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');
const {auth} = require('./middleware/auth');

const { User } = require('./models/User');


app.use(bodyParser.urlencoded({extended: true}));//application/x-www-form-urlencoded 로 된 데이터를 분석해서 가져올 수 있게 한다.

app.use(bodyParser.json()); //application/json 타입으로 된 것을 가져올 수 있게 한다.
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify:false
}).then(()=> console.log('MongoDB 연결됨')).catch((err => {console.log(err)}));

app.get('/', (req, res) => res.send("hello world! 새해에도 "));

app.get('/api/hello', (req, res) => {
    res.send("hello 메시지 전달")
});



app.post('/api/users/register', (req,res) => {
    const user = new User(req.body);

    user.save((err, user) => {
        if(err) return res.json({success:false, err});
        return res.status(200).json({
            success:true
        });
    });
    //save() - mongoDB에서 오는 메소드
});

app.post('/api/users/login', (req, res) => {
    //요청된 데이터를 디비에 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user)=> {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "입력한 이메일에 해당하는 유저가 없습니다."
            })
        }

        //이메일이 디비에 있다면, 비번이 맞는지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if( !isMatch ) {
                return res.json({ loginSuccess:false, message: "비밀번호가 틀렸습니다." })
            }
            
            //비번까지 맞다면, 토큰을 생성한다.
            user.generateToken((err, user) => {
              if(err) return res.status(400).send(err);
              
              // 토큰을 저장한다. 방법은 여러 가지, 일장일단.
              // 쿠키에 저장하기
              res.cookie("x_auth", user.token)
              .status(200).json({ loginSuccess:true, userId: user._id})
            })
        })
    })

})


app.get('/api/users/auth', auth, (req, res) => {
    //여기까지 온다는 것은 미들웨어인 auth 가 통과(true)되었다는 말
    res.status(200).json({
        _id: req.user._id,
        isAdmin:req.user.role === 0 ? false : true,
        isAuth: true,
        email:req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role:req.user.role,
        image:req.user.image
    })
})


app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, {
        token: ""
    }, (err, user)=> {
        if(err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        })
    })
})

const port = 5000; //back server
app.listen(port, () => console.log(`example app listening on port ${port}!`))