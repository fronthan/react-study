import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li> <Link to="/">홈</Link> </li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profiles">프로필</Link></li>
        <li><Link to="/history">history 예제</Link></li>
      </ul>
      <hr />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path={['/about', '/info']} component={About}/>
        {/* <Route path="/profile/:username" component={Profile} /> */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({ location })=> (
          <div>
            <h2>이 페이지는 존재하지 않습니다.:</h2>
            <p>{location.pathname}</p>
          </div>
        )}
        />
      </Switch>
      {/* Switch 컴포넌트는 여러 Route를 감싸서 그 중 일치하는 단 하나의 라우트만을 렌더링시켜준다.
        모든 규칙과 일치하지 않을 때 보여줄 Not Found 페이지도 위와같이 구현한다
      */}
    </div>
  );
};


export default App;
