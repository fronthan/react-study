import React, {useState, useMemo, useCallback, useRef} from 'react';

//==== 8.4 useMemo (일반 값인 숫자, 문자열, 객체를 재사용할 때)
//==== 8.5 useCallback : useCallback없이 일반적으로 함수를 생성하면, 컴포넌트가 리렌더링될 때마다 함수가 새로 생성되는 리소스 낭비를 위한 Hook (함수를 재사용할 때)
//==== 8.6 useRef : ref를 설정하면 useRef로 만든 객체 안의 current 값이 실제 엘리먼트를 가리킨다. 
const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a+b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);//컴포넌트가 처음 렌더링될 때만 함수 실행

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus();
  }, [number,list]);//number나 list가 바뀔 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  //list가 변화될 때만 계산 실행

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>{avg}
      </div>
    </div>
  )
}

export default Average;