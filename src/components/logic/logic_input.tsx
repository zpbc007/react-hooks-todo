import React, { ChangeEventHandler, memo } from 'react'

interface IInput {
    label: string
    value: string | number
    onChange?: ChangeEventHandler<HTMLInputElement>
}

function Input({ value, onChange, label }: IInput) {
    return (
        <div>
            <label>{label}</label>
            <input value={value} onChange={onChange} />
        </div>
    )
}

export default memo(Input)
