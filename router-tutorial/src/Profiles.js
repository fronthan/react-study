import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
// import WithRouterSample from './WithRouterSample'; 

//서브라우트 만들기 : 라우트로 사용되고 있는 컴포넌트 내부에 route 컴포넌트를 또 사용한다
const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  }

  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert" active>민정</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">까비</NavLink>
        </li>
      </ul>
      {/* NavLink 컴포넌트에서 activeStyle={activeStyle} 를 props에 넣으면 활성화 시 active를 자동으로 적용해준다 */}

      <Route path="/profiles" exact
       render={()=> <div>사용자를 선택해주세요.</div>} />
      <Route path="/profiles/:username" component={Profile} />
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;