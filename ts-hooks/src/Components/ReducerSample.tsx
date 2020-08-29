import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action =
    | { type: 'SET_COUNT'; count: number }
    | { type: 'SET_TEXT'; text: string }
    | { type: 'SET_COLOR'; color: Color }
    | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count, // count가 자동완성되며, number 타입인걸 알 수 있음
            };
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text, // text가 자동완성, string 타입
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color, // color가 자동완성, Color 타입
            };
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood,
            };
        default:
            throw new Error('Unhandled action');
    }
}

function ReducerSample() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true,
    });

    const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); // count
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); //  text
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' }); // color
    const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

    return (
        <div>
            <p>
                <code>count: </code>
                {state.count}
            </p>
            <p>
                <code>text: </code>
                {state.text}
            </p>
            <p>
                <code>color: </code>
                {state.color}
            </p>
            <p>
                <code>isGood: </code>
                {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toggleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    );
}

export default ReducerSample;
