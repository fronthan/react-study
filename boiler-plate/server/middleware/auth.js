const { User } = require('../models/User');

let auth = (req, res, next) => {
//인증처리를 한다.

//클라이언트 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;

//가져온 토큰 복호화해서 유저를 찾는다.
    User.findByToken(token, (err, user)=> {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error:true });

        req.token = token;
        req.user = user;
        next();
    })
    

// 유저가 있으면 인증됨

//유저가 없으면 인증 안됨

}

module.exports = {auth};