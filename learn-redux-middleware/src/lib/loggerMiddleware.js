const loggerMiddleware = store => next => action => {
  //미들웨어 기본 구조, 미들웨어란, 함수를 반환하는 함수이다

  console.group(action && action.type); //액션 타입으로 log 를 그룹화함
  console.log('이전상태', store.getState());
  console.log('액션', action);
  next(action);//다음 미들웨어 혹은, 리듀서에게 전달
  console.log('다음 상태', store.getState()); //업데이트된 상태
  console.groupEnd();//그룹 끝
}

export default loggerMiddleware;