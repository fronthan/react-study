//import React from 'react';
// import Counter from "./Counter";
//import Say from "./Say";
//import EventPracticeClass from "./EventPracticeClass";
// import EventPracticeFunc from "./EventPracticeFunc";
// import RefSample from "./RefSample";
// import ValidateSample from "./ValidateSample";
// import IterationSample from './IterationSample';
//import CounterFunc from './CounterFunc';
// import Info from './Info';
//import Average from "./Average";

/* ==== 5.3 DOM 에 ref 이름 달기, 컴포넌트 전체를 상위 컴포넌트에서 제어하기
//데이터 전달을 위해 사용하면 안 됨 주의
// import React, { Component } from "react";
// import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}*/

/* ====5.2.3 Hook 뒷정리하기 cleanup 함수 
// import React, {useState } from 'react';
// import Info from './Info';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button onClick={() => {
        setVisible(!visible)
      }}>{visible ? '숨기기' : '보이기'}</button>
      <hr/>
      {visible && <Info />}
    </>
  )
}*/

/*/==== 8.3 useReducer
import React from 'react';
import CounterFuncB from './CounterFunc';
import InfoB from './InfoB';
import InfoC from './InfoC';
*/


import React, { Component } from 'react';
/*==== 9.1 css 규칙
 import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src="{logo}" alt="logo" className="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}*/

// import SassComponent from './SassComponent';
// import CSSModule from './CSSModule';

/* ======= 9.3 styled-component 
import StyledComponent from './StyledComponent';
*/

import React from 'react';


class App extends Component {
  render() {

    return(
      <div>
        <CSSModule />
      </div>
    );
  }
}

export default App;
