import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: ''
  }

  /* ==== 4.2.3.1 임의 메서드만들기 ====
    함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 html 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어진다. 이 때문에 bind(this)가 꼭 필요하고, 바인딩하지 않으면 this가 undefined를 가리키게 된다. 
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  */
  // ★ 화살표 함수로 메서드를 정의하면 위와 같이 constructor를 쓰지 않아도 된다.
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }); //객체 안에서 key 를 [] 로 감싸면, 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다. 
  }

  handleClick = () => {
    this.setState({message: '', username:''});
    alert(this.state.username + ': ' + this.state.message);
  }

  handleKeyPress = e => {
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }


  render() {
    return (
      <div>
        <h1>리액트 이벤트 연습</h1>
        {/* ==== 4.2.2.2 : state에 input 값 담기 ====
        <input type="text" name="message" placeholder="아무거나 입력해보세요"
          onChange={ (e)=> {
            this.setState({message: e.target.value})
          }}
          
          value={this.state.message}
        /> */}
        <input type="text" name="username" placeholder="사용자명"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input type="text" name="message" placeholder="아무거나 입력해보세요"
          onChange={this.handleChange}
          value={this.state.message}
          onKeyPress={this.handleKeyPress}
        />

        {/* ==== 4.2.2.3 : 버튼을 누를 때 input 값을 공백으로 설정 ====
        <button onClick={ ()=> {
          alert(this.state.message);
          this.setState({
            message: ''
          });
        }}>확인</button> */}
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;