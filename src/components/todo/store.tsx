import { useReducer } from 'react'
import { IList } from '@comp/list'
import createContainer from '@utils/constate'

type ActionType = 'del' | 'add' | 'toggle' | 'clear'

interface IAction {
    type: ActionType
    payload?: any
}

function reducer({ items = [] }: IList, action: IAction): IList {
    switch (action.type) {
        case 'add':
            return {
                items: [...items, { checked: false, text: action.payload }],
            }
        case 'del':
            return {
                items: items.filter((_, index) => index !== action.payload),
            }
        case 'toggle':
            return {
                items: items.map((item, index) => {
                    if (index !== action.payload) {
                        return item
                    }

                    return {
                        ...item,
                        checked: !item.checked,
                    }
                }),
            }
        case 'clear':
            return {
                items: [],
            }
        default:
            throw new Error(`action type: ${action.type} does not exit`)
    }
}

function TodoStore() {
    const [state, dispatch] = useReducer(reducer, { items: [] })
    return {
        state,
        dispatch,
    }
}

export default createContainer(TodoStore)
