import React, { Component } from 'react';

// ==== 5.3.2 컴포넌트 전체 ref  이름달기
class ScrollBox extends Component {

  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;

    this.box.scrollTop = scrollHeight - clientHeight; //안 박스 - 밖 박스 650 - 300
  }

  render() {
    const style= {
      overflow:'auto',
      position:'relative',
      height:'300px',
      width:'300px',
      border: '1px solid black',
    }

    const innerStyle = {
      width: '100%', height:'650px',
      background: 'linear-gradient(white, black)'
    }

    return (
      <div style={style}
        ref={(ref)=> {this.box=ref}}>
          <div style={innerStyle} />        
      </div>
    );
  }
}

export default ScrollBox;