import React, { useRef } from 'react'
import Todo, { ITodoRef } from '@comp/todo'

function Test() {
    const firstRef = useRef<ITodoRef>()
    const handleClear = () => {
        debugger
        firstRef.current.clear()
    }

    return (
        <div>
            <Todo $ref={firstRef} />
            <hr />
            <button onClick={handleClear}>清除</button>
            <hr />
            <Todo />
        </div>
    )
}

export default Test
