import React, { Component } from 'react';

class Counter extends Component {
  //==== 3.4.1.1 : state 객체 안에 여러 값이 있을 때 ====//
  /*constructor(props) { //생성자 함수로 state 사용하는 기본 방법
    super(props);
    
    this.state = {
      number: 0,
      fixedNumber: 0
    }
  }*/
  
  //생성자 함수 밖으로 꺼내고 this를 삭제하면 코드가 간단해진다.
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        {/* ==== 3.4.1.1 : 기본적인 state값 바꾸는 방법 */}
        <button
          onClick={() => {
            this.setState({number: number+1})
          }}
        >+1 기본적인 setState</button>
        {/* ==== 3.4.1.3 : setState(prevState, props) - prevState는 기존 상태, props는 현재 지니고 있는 상태 */}
        <button onClick={()=> {
          this.setState(prevState => {
            return {
              number: prevState.number+1
            }
          })
        }}>
          +1 prevState 사용
        </button>

        {/* ==== 3.4.1.4 : this.setState가 끝나고 특정 작업 실행하기 */}
        <button onClick={()=> {
          this.setState({number:number+1}, ()=>{
            console.log('방금 setState가 호출되었습니다.');
            console.log(this.state);
          });
        }}
        >+1 setState후 cb함수</button>
      </div>
    );
  }
}

export default Counter;