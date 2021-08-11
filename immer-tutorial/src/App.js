import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

/*
immer 사용법, 불변성을 유지하기
const nextState = produce(originalState, draft => {
  draft.somewhere.value = 5;
});

* 첫번째 파라미터는 수정하고 싶은 상태, 두 번째 파라미터는 상태를 어떻게 업뎃할지 정의하는 함수
*/
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name : '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback( e => {//input 수정
    const { name, value } = e.target;
    // setForm(
    //   produce(form, draft => {
    //     draft[name] = value
    //   })
    // );
//** immer에서 제공하는 produce함수를 호출할 때 첫번째 파라미터가 함수 형태라면, 업데이트 함수를 반환한다. (위 코드와 아래 코드 비교)
    setForm(
      produce(draft => {
        draft[name] = value
      })
    );
  }, []);

  const onSubmit = useCallback( e=> {//form 등록
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username
    };

    //array에 새 항목 등록
    // setData(
    //   produce(data, draft => {
    //     draft.array.push(info);
    //   })
    // );
    setData(
      produce(draft => {
        draft.array.push(info);
      })
    );

    //form 초기화
    setForm({
      name:'', username:''
    });
    nextId.current += 1;
  },[form.name, form.username]);

  const onRemove = useCallback(//항목 삭제하기
    id => {
      // setData(
      //   produce(data, draft => {
      //     draft.array.splice(draft.array.findIndex(info=> info.id !== id), 1);
      //   })
      // );
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info=> info.id !== id), 1);
        })
      );
    }, []);
  
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text"name="username" placeholder="아이디" value={form.username} onChange={onChange} />
        <input type="text" name="name" placeholder="이름" value={form.name} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={()=> onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
