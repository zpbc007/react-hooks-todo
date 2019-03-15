import React, { useReducer, useCallback } from 'react'
import View from './logic.view'

function reducer(state, action) {
    switch (action.type) {
        case 'val1Change':
            return {
                ...state,
                val1: action.payload,
            }
        case 'val2Change':
            return {
                ...state,
                val2: action.payload,
            }
        case 'val3Change':
            return {
                ...state,
                val3: action.payload,
            }
    }
}

function useChangeLogic() {
    const [state, dispatch] = useReducer(reducer, {})

    return {
        handleVal1Change: useCallback(
            (e) => dispatch({ type: 'val1Change', payload: e.target.value }),
            []
        ),
        handleVal2Change: useCallback(
            (e) => dispatch({ type: 'val2Change', payload: e.target.value }),
            []
        ),
        handleVal3Change: useCallback(
            (e) => dispatch({ type: 'val3Change', payload: e.target.value }),
            []
        ),
        state,
    }
}

function Logic1() {
    const {
        handleVal1Change,
        handleVal2Change,
        handleVal3Change,
        state: { val1 = 0, val2 = 0, val3 = 0 },
    } = useChangeLogic()

    return (
        <View
            label1="+"
            label2="+"
            label3="+"
            val1={val1}
            val2={val2}
            val3={val3}
            onVal1Change={handleVal1Change}
            onVal2Change={handleVal2Change}
            onVal3Change={handleVal3Change}
            num={Number(val1) + Number(val2) + Number(val3)}
        />
    )
}

function Logic2() {
    const {
        handleVal1Change,
        handleVal2Change,
        handleVal3Change,
        state: { val1 = 0, val2 = 0, val3 = 0 },
    } = useChangeLogic()

    return (
        <View
            label1="+"
            label2="-"
            label3="+"
            val1={val1}
            val2={val2}
            val3={val3}
            onVal1Change={handleVal1Change}
            onVal2Change={handleVal2Change}
            onVal3Change={handleVal3Change}
            num={Number(val1) - Number(val2) + Number(val3)}
        />
    )
}

export { Logic1, Logic2 }
