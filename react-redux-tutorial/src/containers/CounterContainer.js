import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {

    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

/*const mapStateToProps = state => ({
    number: state.counter.number,
}); 

const mapDispatchToProps = dispatch => ({
    increase: () => {
    //    console.log('increase');
        dispatch(increase());
    },
    decrease: () => {
    //    console.log('decrease');
        dispatch(decrease());
    }
}); 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
//아래처럼 connect 함수 안에 익명함수 형태로 선언 하는 수도 있다. 
*/

export default connect(
    state => ({
        number: state.counter.number,
    }),
    dispatch => 
    bindActionCreators(
        {
            increase, decrease,
        },
        dispatch
    )
)(CounterContainer);