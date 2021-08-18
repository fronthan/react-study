import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
// import WithRouterSample from './WithRouterSample'; 

//서브라우트 만들기 : 라우트로 사용되고 있는 컴포넌트 내부에 route 컴포넌트를 또 사용한다
const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">민정</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">까비</Link>
        </li>
      </ul>

      <Route path="/profiles" exact
       render={()=> <div>사용자를 선택해주세요.</div>} />
      <Route path="/profiles/:username" component={Profile} />
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;