import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/profile/velopert">velopert프로필</Link></li>
        <li><Link to="/profile/gildong">gildong프로필</Link></li>        
      </ul>
<hr />
      <Route path="/" exact={true} component={Home} />
      <Route path={['/about', '/info']} component={About}/>
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};


export default App;
