require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser'; //이 미들웨어는 post/put/patch 같은 메서드의 request body에 JSON 형식으로 데이터를 넣어주면, 이를 파싱해서 서버에서 사용할 수 있게 하고, router를 적용하는 코드의 윗부분에서 사용해야 한다. 
import mongoose from 'mongoose';

import api from './api';
import createFakeData from './createFakeData';

const { PORT, MONGO_URI } = process.env; //비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기


mongoose.connect("mongodb://localhost:27017/blog", {useNewUrlParser: true})//window에서는 string으로 보내야 된다 21.11.08
.then(()=> {
  console.log('Connected to MONGoDB');
})
.catch(e=> {
  console.error(e)
});

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); //api 라우트 적용

app.use(bodyParser());//라우터 적용 전에 bodyparser 적용

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, ()=> {
  console.log('Listening to port %d', port);
})