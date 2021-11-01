const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser'); //이 미들웨어는 post/put/patch 같은 메서드의 request body에 JSON 형식으로 데이터를 넣어주면, 이를 파싱해서 서버에서 사용할 수 있게 하고, router를 적용하는 코드의 윗부분에서 사용해야 한다. 

const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes()); //api 라우트 적용


/* 기본적인 라우트 적용 방법 ( 파라미터, 쿼리 )
router.get('/', ctx => {
  ctx.body = "홈";
});
router.get('/about/:name?', ctx => {
  const { name } = ctx.params;

  ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', ctx=> {
  const { id } = ctx.query;

  ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';  
});
*/

app.use(bodyParser());//라우터 적용 전에 bodyparser 적용

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, ()=> {
  console.log('Listening 4000')
})