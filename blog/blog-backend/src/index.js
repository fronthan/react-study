const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {//ctx 는 context로, 웹요청과 응답에 관한 정보를 지니고 있다. 
  //next는 다음 미들웨어를 호출하며, 주로 다음 미들웨어를 처리할 필요가 없는 라우트 미들웨어를 나중에 설정할 때 next를 생략해 미들웨어를 작성한다. 
  console.log(ctx.url);
  console.log(1);

  if (ctx.query.authorized !== '1') {
    ctx.status = 401; //unauthorized
    return;
  }
  
  /*next().then(()=> {//next함수는 Promise를 반환하기 때문에, 다음에 처리해야 할 미들웨어가 끝나야 완료된다. 
    console.log('END');
  });*/
  await next();
  console.log('END');
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use(ctx=> {
  ctx.body = 'hello world7'
});

app.listen(4000, ()=> {
  console.log('Listening 4000')
})