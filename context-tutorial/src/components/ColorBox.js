import React, { useContext } from 'react';
// import { ColorConsumer } from '../contexts/color'; //15.3 Consumer
import ColorContext from '../contexts/color'; //15.4 useContext Hook 함수형 컴포넌트

const ColorBox = () => {

    const { state } = useContext(ColorContext);

    return (
        /* 15.2.2
        //기본적으로 context.consumer 로 값을 가져올 수 있다
        //Provider 를 사용하지 않았을 때만 사용된다. 
        // <ColorContext.Consumer>
        //     {value => (
        //         <div style={{
        //             width:'64px',
        //             height:'64px',
        //             background:value.color
        //         }}/>
        //     )}
        // </ColorContext.Consumer>
        */
      /* <ColorConsumer> //15.3
           {   ({ state }) => (*/
               //value => (
               <>
               <div style={{
                   //width:'64px', height:'64px', background:value.state.color
                   width:'64px', height:'64px', background:state.color
               }} />
               <div style={{
                   width:'32px', height:'32px', background:state.subcolor
               }}/>
               </>
       /*    )}
    //    </ColorConsumer> */
    );
}

export default ColorBox;