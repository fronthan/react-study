import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]);
    //리렌더링될 때마다 새롭게 만들어지므로 useCallback을 사용한다. 
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    );
};

export default CounterContainer;