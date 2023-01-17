import React, { createContext, useState } from 'react'

export const DataContext = createContext();
export default function DataProvider(props) {
    const [todos, setTodos] = useState(() => {
        const store = JSON.parse(localStorage.getItem("todo"))
        return store ?? [];
    });

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
