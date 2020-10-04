const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
const RESET = 'counter/RESET' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff,
});
export const reset = () => ({ type: RESET });

type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>
    | ReturnType<typeof reset>;

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0,
};

function counter(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        case RESET:
            return { count: state.count - state.count };
        default:
            return state;
    }
}

export default counter;
