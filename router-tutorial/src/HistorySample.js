import React, { Component } from 'react';

class HistorySample extends Component {
  //뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  }
  
  //홈으로 가기
  handleGoHome = () => {
    this.props.history.push('/');
  }

  componentDidMount() {
    //페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
    this.unblock = this.props.history.block('정말 나갈까요?');
  }

  componentWillUnmount() {
    //언마운트되면 질문을 멈춘다
    if (this.unblock) {
      this.unblock();
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    )
  }
}


export default HistorySample;