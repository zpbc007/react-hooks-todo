import React, { useRef, useCallback } from 'react'

interface IInput {
    onConfirm: (value: string) => void
}

function Input({ onConfirm }: IInput) {
    const inputEl = useRef<HTMLInputElement>()
    const handleBtnClick = useCallback(() => {
        if (inputEl.current && inputEl.current.value) {
            onConfirm(inputEl.current.value)
            inputEl.current.value = ''
        }
    }, [onConfirm, inputEl])

    return (
        <div>
            <input ref={inputEl} />
            <button onClick={handleBtnClick}>确认</button>
        </div>
    )
}

export default React.memo(Input)
