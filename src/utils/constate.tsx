import React from 'react'

function createContainer<P, V>(useValue: (props: P) => V, createMemoInputs?: (value: V) => any[]) {
    const Context = React.createContext({} as V)

    const Provider = (props: { children?: React.ReactNode } & P) => {
        const value = useValue(props)
        const memoizedValue = createMemoInputs
            ? React.useMemo(() => value, createMemoInputs(value))
            : value

        return <Context.Provider value={memoizedValue}>{props.children}</Context.Provider>
    }

    return {
        Context,
        Provider,
    }
}

export default createContainer
