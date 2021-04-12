import React, { useState } from 'react';

function Say() {
  /* ==== 3.4.2.2 useState 맛보기 (배열 비구조화 할당) ==== */
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{backgroundColor:'red'}} onClick={()=> setColor('red')}>빨강</button>
      <button style={{backgroundColor:'green'}} onClick={ ()=> setColor('green')}>초록</button>
      <button style={{backgroundColor:'skyblue'}} onClick={ ()=> setColor('skyblue')}>하늘</button>
     </div>
  );
}

export default Say;