import React, { useRef, useCallback, useState } from 'react';
//immer 를 사용하지 않은 일반적인 방법
//12장 초반
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name : '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback( e => {//input 수정
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: [value]
    });
  }, [form]);

  const onSubmit = useCallback( e=> {//form 등록
    e.preventDefault();
    const info = {
      id: nextId.current,
      name: form.name,
      username: form.username
    };

    //array에 새 항목 등록
    setData({
      ...data,
      array: data.array.concat(info)
    });

    //form 초기화
    setForm({
      name:'', username:''
    });
    nextId.current += 1;
  },[data, form.name, form.username]);

  const onRemove = useCallback(//항목 삭제하기
    id => {
      setData({
        ...data,
        array: data.array.filter(info=> info.id !== id)
      });
    }, [data]);
  
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