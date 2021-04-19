import React, { useState, useEffect } from "react";


const Info = () => {
  //==== 8.1.2 여러 개 useState 사용하기
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  /*==== 8.2 useEffect, 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정
  //componentDidMount + componentDidUpdate 를 합친 형태
  //두번째 인자인 '[]'는 didUpdate에 대한 참조값으로, 비어있으면 리렌더링에는 수행하지 않는다. 
  useEffect(()=> {
    console.log('렌더링이 완료되었습니다');
    console.log({
      name, nickname
    })
  }, [name]);
  */

  //==== 8.2.3 뒷정리 함수
  useEffect(()=> {
    console.log('effect');
    console.log(name)
  
    return () => {//return으로 아무 값도 반환하지 않으므로 name 값이 없어진다 
      console.log('clean up');
      console.log(name);
    }
},[name]);

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
