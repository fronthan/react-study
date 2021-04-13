import React, { Component } from 'react';
import "./ValidateSample.css";


// ref - dom을 직접적으로 접근 사용할 때, '특정 input에 포커스 주기', '스크롤 박스 조작하기', 'canvas 요소에 그림 그리기' 등..
/* ===== 5.2.1 콜백함수를 통한 ref 설정
<input ref={(ref) => {this.anyname=ref}} />
* 이렇게 작성하면 this.anyname은 input 요소의 DOM을 가리키게 된다.*/

// ==== 5.2.2 : 리액트 내장함수 createRef 를 통한 ref 설정
class RefSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };

  anyname = React.createRef();

  handleFocus = () => {
    this.anyname.current.focus();
  } // this.anyname.current 가 ref 설정한 DOM에 접근하기
  
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });

    if (this.state.validated === false) {
      this.handleFocus();
    }
  };
  
  render() {
    return (
      <div>
        <input ref={this.anyname}/>
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default RefSample;