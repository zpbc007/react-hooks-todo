import React, { ChangeEvent } from 'react'
import ListItem, { IListItem } from '@comp/list_item'

export interface IList {
    items: IListItem[]
    onItemDel?: (index: number) => void
    onItemChange?: (index: number, value: boolean) => void
}

function List({ items, onItemDel, onItemChange }: IList) {
    const handleDel = (index: number) => () => {
        onItemDel && onItemDel(index)
    }

    const handleChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
        onItemChange && onItemChange(index, e.currentTarget.checked)
    }

    const renderItem = ({ checked, text }, index) => (
        <ListItem
            key={index}
            checked={checked}
            text={text}
            onDelete={handleDel(index)}
            onChange={handleChange(index)}
        />
    )

    return <ul>{items.map(renderItem)}</ul>
}

export default List
