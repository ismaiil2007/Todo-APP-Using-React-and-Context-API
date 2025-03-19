import React, { useState, useEffect } from 'react';

export const Context = React.createContext()

export const TodosContextProvider = ({ children }) => {
    // Load todos from localStorage on initial render
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    console.log("todos",todos)

    return <Context.Provider value={{todos, setTodos}}>
        {children}
    </Context.Provider>
}

