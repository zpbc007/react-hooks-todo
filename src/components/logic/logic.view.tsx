import React, { ChangeEventHandler, memo } from 'react'
import Input from './logic_input'

interface IView {
    label1: string
    label2: string
    label3: string
    val1: number
    val2: number
    val3: number
    onVal1Change: ChangeEventHandler<HTMLInputElement>
    onVal2Change: ChangeEventHandler<HTMLInputElement>
    onVal3Change: ChangeEventHandler<HTMLInputElement>
    num: number
}

function View({
    label1,
    label2,
    label3,
    val1,
    val2,
    val3,
    onVal1Change,
    onVal2Change,
    onVal3Change,
    num,
}: IView) {
    return (
        <div>
            <Input label={label1} value={val1} onChange={onVal1Change} />
            <Input label={label2} value={val2} onChange={onVal2Change} />
            <Input label={label3} value={val3} onChange={onVal3Change} />
            {num}
        </div>
    )
}

export default memo(View)
