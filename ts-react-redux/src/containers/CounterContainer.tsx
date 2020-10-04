import { decrease, increase, increaseBy } from '../modules/counter';
import { useDispatch, useSelector } from 'react-redux';

import Counter from '../components/Counter';
import React from 'react';
import { RootState } from '../modules';

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onIncreaseBy = (diff: number) => dispatch(increaseBy(diff));

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
}

export default CounterContainer;
