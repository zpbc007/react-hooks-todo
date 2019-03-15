import React, { useRef } from 'react'
import Todo, { ITodoRef } from '@comp/todo'
import { Logic1, Logic2 } from '@comp/logic/logic.wrapper';

function Test() {
    const firstRef = useRef<ITodoRef>()
    const handleClear = () => {
        debugger
        firstRef.current.clear()
    }

    return (
        <div>
            <h1>代办测试</h1>
            <Todo $ref={firstRef} />
            <hr />
            <button onClick={handleClear}>清除</button>
            <hr />
            <Todo />
            <hr style={{ marginBottom: '50px' }} />
            <h1>逻辑组件测试</h1>
            <Logic1 />
            <Logic2 />
        </div>
    )
}

export default Test
