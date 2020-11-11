const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; //salt 가 몇 글자인지?


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
    }
    
});//mongoose 메서드

const User = mongoose.model('User', userSchema);
module.exports = {User};
//trim:공백을 없애줌