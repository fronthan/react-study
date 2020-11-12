const { User } = require('../models/User');

let auth = (req, res, next) => {//인증 처리를 하는 곳

    //1. 브라우저 (client) 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;

    //2. 토큰을 복호화한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true });

        req.token = token;//이렇게 req에 입력해줘야 다른 곳에서 req.token 으로 정보를 사용할 수 있다.
        req.user = user;
        next(); //next 로 인해 미들웨어에서 나갈 수 있다.
    })

    //3. 유저가 있으면 인증 Okay,

    //4. 유저가 없으면 인증 No

}

module.exports = { auth };