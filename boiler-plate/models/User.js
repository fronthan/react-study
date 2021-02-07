const mongoose = require('mongoose');

//DB 의 스키마 선언
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength : 5
    },
    lastname: {
        type:String,
        maxlength: 5
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

//스키마를 모델로 감싼다. 'User'는 이름일 뿐이다.
const User = mongoose.model('User', userSchema);

module.exports = {User}