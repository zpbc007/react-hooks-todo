import React, { MouseEventHandler, ChangeEventHandler } from 'react'

export interface IListItem {
    checked: boolean
    text: string
    onDelete?: MouseEventHandler
    onChange?: ChangeEventHandler<HTMLInputElement>
}

function ListItem({ checked = false, text = '', onDelete, onChange }: IListItem) {
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span>{text}</span>
            <button onClick={onDelete}>删除</button>
        </div>
    )
}

export default React.memo(ListItem)
