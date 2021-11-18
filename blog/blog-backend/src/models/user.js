import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

const UserSchema = new Schema({
    username: String,
    hashedPassword: String
});

UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result; // true or false
}

UserSchema.methods.serialize = function() {
    //응답할 데이터에서 hashedPassword 필드 제거
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
}

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        //첫번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣는다
        {
            _id:this.id,
            username: this.username,
        },
        ""+JWT_SECRET, 
        {//두번째 파라미터는 jwt 암호를 넣는다. string화 시켜야 한다 (21.11.18)
            expiresIn: '7d', //7일동안 유효하다
        },
    );
    return token;
};


const User = mongoose.model('User', UserSchema);
export default User;