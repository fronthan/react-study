/*==== 8.1함수형 컴포넌트의 Hook 기본
import React, { useState } from 'react';

const CounterFuncA = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
      <button onClick={()=> setValue(value+1)}>+1</button>
      <button onClick={()=> setValue(value-1)}>-1</button>
    </div>
  );
}*/

//==== 8.3 useReducer 
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT' : 
    return { value: state.value + 1};
    case 'DECREMENT' :
      return {value: state.value - 1};
    default:
      return state;
  }
}

const CounterFuncB = () => {
  const [state, dispatch] = useReducer(reducer, {value:0});//2번째 파라미터는 1번째 파라미터로 가져온 reducer함수의 기본값으로 넣어준다. 
  //여기 state는 현재 가리키고 있는 상태이고, dispatch는 액션을 발생시키는 함수이다. 
  // dispatch(action)처럼 함수 안에 파라미터로 액션값을 넣으면 리듀서 함수가 호출된다.


  return (
    <div>
      <p>현재 카운터 값은 <b>{state.value}</b>입니다.</p>
      <button onClick={()=> dispatch({type: 'INCREMENT'})}>+1</button>
      <button onClick={()=> dispatch({type: 'DECREMENT'})}>-1</button>
    </div>
  )
}
export default CounterFuncB;