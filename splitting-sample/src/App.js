import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(()=> import('./SplitMe'), {
  fallback: <div>loading...</div>
});

/* loadable components 는 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리이다.  */
function App() {
  const [visible,setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  }

  const onMouseOver = () => {
    SplitMe.preload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo"/>
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;