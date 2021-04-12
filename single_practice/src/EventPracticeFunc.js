import React, { Fragment, useState } from 'react';

//==== 4.3 eventPracticeClass를 함수형으로 바꿔보기

const EventPracticeFunc = () => {

  /* input이 개수가 적을 때 사용하면 괜찮다. 
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value); */

  //==== form 객체로 묶어서 여러 개 인풋 값 관리하기 ==== //
  const [ form, setForm ] = useState({
    username: '',
    message:''
  });
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용을 복사하고,
      [e.target.name] : e.target.value //원하는 값을 덮어쓴다
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username:'', message:''
    })
  };
  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <Fragment>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="사용자명"
      value={username} onChange={onChange}/>
      <input type="text" name="message" placeholder="아무거나 입력해보세요"
      value={message} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick={onClick}>확인</button>      
    </Fragment>
  );
}

export default EventPracticeFunc;