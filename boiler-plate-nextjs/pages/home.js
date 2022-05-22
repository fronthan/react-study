import React, {useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store/store';
import userSlice from '../redux/slice/user';
import Layout from '../component/layout';

export default function Home() {
  const dispatch = useAppDispatch();
  const user = useSelector((state) => state.user);
  const [inpName, setIneName] = useState('');

  const handleName = useCallback((name) => {
    dispatch(
      userSlice.actions.setName({
        name,
      })
    )
    }, []);

  return (
    <Layout>
      <div>이름: {user.name}</div>
      <div>이메일 : {user.email} </div>
      <input type="text" onChange={(e)=>setIneName(e.target.value)} value={inpName} />
      {/* <button onClick={()=> handleName('이름이 바꼈다.')}>리덕스 바꾸기</button> */}
    </Layout>

    


  )
}