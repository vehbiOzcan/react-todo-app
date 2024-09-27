import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([{
        id: 1,
        text: "Learn React",
        completed: true
    },
    {
        id: 2,
        text: "Learn Spring Boot",
        completed: false
    }
    ])

    const addTodo = (text) => {
        setTodos((prev) => [...prev,{id:uuidv4(),completed:false,text:text}])
    }

    const changeTodo = (id) => {
        const clone_todos = [...todos];
        const itemIndex = clone_todos.findIndex((todo) => todo.id === id);
        //console.log(itemIndex)
        const item = todos[itemIndex];
        //console.log(item);
        item.completed = !item.completed;
        setTodos(clone_todos);
    } 

    const values = {
        todos,
        setTodos,
        addTodo,
        changeTodo
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => {
    const context = useContext(TodoContext);

    if (context === undefined)
        throw new Error("useTodos provide must be a TodosContextProvider");
    return context;
}