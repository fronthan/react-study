import React, {useState} from 'react';

const IterationSample = () => {  
  /*==== 6.3 map, key  
  //게시물 번호와 같이 고유값이 없을 때만 index를 key로 사용한다. 
  const names = ['눈사람','얼음','눈','바람'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);*/

  // ==== 6.4 map 응용 (concat, filter 함수)
  const [ names, setNames ] = useState([
    {id:1, text:'눈사람'},
    {id:2, text:'얼음'},
    {id:3, text:'눈'},
    {id:4, text:'바람'}
  ]);
  const [inputText, setinputText] = useState('');
  const [nextId, setnextId] = useState(5); //새 항목을 추가할 때 사용할 id
  
  const onChange  = e => setinputText(e.target.value);
  const onClick = () =>  {
    //불변성 유지를 위해 기존 배열을 수정하는 push보다 새로운 배열을 생성해주는 concat을 사용한다 
    const nextNames = names.concat({
      id:nextId,
      text:inputText
    });

    setnextId(nextId +1);
    setNames(nextNames);
    setinputText('');
  }

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>{name.text}</li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;