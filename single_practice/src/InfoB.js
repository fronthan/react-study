import React, { useReducer } from "react";

//==== 8.3 리듀서로 인풋상태관리하기 */
function reducer(state, action) {
  return {
    ...state,
    [action.name] : action.value
  }
}

const InfoB = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  }); //useReducer에서의 액션은 어떤 값도 사용할 수 있다.
  //state는 현재 가리키고 있는 상태 & dispatch는 액션을 발생시키는 함수
  const {name,nickname} = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange}/>
        <input type="text" name="nickname" value={nickname} onChange={onChange}/>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  )
}

export default InfoB;