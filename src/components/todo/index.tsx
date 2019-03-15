import React, { useContext, useImperativeHandle, useCallback } from 'react'
import Input from '@comp/input'
import Store from './store'
import List from '@comp/list'
import { nest } from '@utils/helper'
import { IListItem } from '@comp/list_item'

export interface ITodo {
    onChange?: (items: IListItem[]) => void
    onDel?: (index: number) => void
    onAdd?: (text: string) => void
    $ref: any
}

export interface ITodoRef {
    clear: () => void
}

function Todo({ $ref }: ITodo) {
    const { state, dispatch } = useContext(Store.Context)

    useImperativeHandle($ref, () => ({
        clear: () => {
            dispatch({ type: 'clear' })
        },
    }))

    const handleInputChange = useCallback((value) => dispatch({ type: 'add', payload: value }), [])
    const handleListDel = useCallback((index) => dispatch({ type: 'del', payload: index }), [])
    const handleListChange = useCallback(
        (index) => dispatch({ type: 'toggle', payload: index }),
        []
    )

    return (
        <div>
            <Input onConfirm={handleInputChange} />
            <List items={state.items} onItemDel={handleListDel} onItemChange={handleListChange} />
        </div>
    )
}

export default nest(Store.Provider, Todo)
