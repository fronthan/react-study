// console.log('hello parcel')
import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h2');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//액션 : 프로젝트의 상태에 변화를 일으키는 것
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 생성 함수. 액션 객체는 type을 가지고 있어야 한다. 
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference});
const decrease = () => ({ type: DECREASE });

const initialState = {
    toggle:false,
    counter:0
}

//리듀서는 변화를 일으키는 함수이다. 파라미터로는 state와 action 값을 받는다. 
function reducer(state = initialState, action) {
    //state가 undefined일 때(맨 처음 호출될 때)는 initalState 를 기본으로 사용
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle:!state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer); //스토어
//파라미터에 리듀서 함수를 넣는다. 

//render 함수는 html을 사용해 만들어진 ui의 속성을 상태에 따라 변경한다. 
const render = () => {
    const state = store.getState();//현재 상태를 불러온다. 

    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
}

render();
store.subscribe(render); //스토어의 상태가 바뀔 때마다 render함수가 호출되게 한다. 내장함수 subscribe 의 파라미터는 함수 형태로 전달한다. 


//디스패치 : 액션을 발생시키는 것.
//dispatch : 스토어의 내장 함수. 액션 객체를 파라미터로 전달. 
divToggle.onclick = () => {
    store.dispatch(toggleSwitch())
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1))
};
btnDecrease.onclick = () => {
    store.dispatch(decrease())
};