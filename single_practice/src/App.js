// import React from 'react';
// import Counter from "./Counter";
//import Say from "./Say";
//import EventPracticeClass from "./EventPracticeClass";
// import EventPracticeFunc from "./EventPracticeFunc";
// import RefSample from "./RefSample";
// import ValidateSample from "./ValidateSample";

// ==== 5.3 DOM 에 ref 이름 달기, 컴포넌트 전체를 상위 컴포넌트에서 제어하기
//데이터 전달을 위해 사용하면 안 됨 주의
import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
