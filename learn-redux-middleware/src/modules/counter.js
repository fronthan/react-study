import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//1초 뒤에 increase 혹은 decrease 함수를 디스패치한다
export const increaseAsync = () => dispatch => {
  setTimeout(()=> {
    dispatch(increase());
  }, 1000);
}

export const decreaseAsync = () => dispatch => {
  setTimeout(()=> {
    dispatch(decrease());
  }, 1000);
}

const initialState = 0; //상태는 객체가 아니어도 된다

const counter = handleActions(
  {
    [INCREASE]: state => state+1,
    [DECREASE]: state => state-1
  },
  initialState
);

export default counter;