const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt 가 몇 글자인지?
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true, 
        unique:1
    },
    password: {
        type: String,
        minlength:5
    },
    lastname: {
        type: String,
        maxlength:50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

userSchema.pre('save', function( next ){//next 하면 index.js의 user.save 부분으로 넘어간다
    var user = this; //userSchema를 가리킨다.

    if (user.isModified('password')) {
        //비밀번호를 바꿀 때만 암호화
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){//hash가 암호화된 비번
                if(err) return next(err);
                user.password = hash;
                next()
            })
        })
    } else { //비밀번호 말고 다른 걸 바꿀 때, 다음으로 넘어가기 위해
        next()
    }
    
});//mongoose 메서드


//index.js에서 준 것과 똑같은 메서드이름(comparePassword) 사용
userSchema.methods.comparePassword = function(plainPassword, cb){
    //plainPassword 1234567 -입력한 비번 & DB의 암호화된 비번 
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){//this.password 가 암호화된 DB의 비번
        if(err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    //jsonwebtoken을 이용해서 token을 생성
    var token = jwt.sign(user._id.toHexString(), 'anythingpossible');
    // user._id + 'anything' = token; //나중에 'anythingpossible'을 넣으면 user._id를 찾을 수 있다.
    user.token = token; 
    user.save(function(err, user) {
        if(err) return cb(err);
        return cb(null, user)
    })

}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    //토큰을 decode 한다
    jwt.verify(token, 'anythingpossible', function(err, decoded) {
        //유저 아이디를 이용해 유저를 찾은 다음에.

        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

        user.findOne({"_id":decoded, "token": token }, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })

}

const User = mongoose.model('User', userSchema);
module.exports = {User};
//trim:공백을 없애줌