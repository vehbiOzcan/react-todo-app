import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const default_todos = [{
        id: uuidv4(),
        text: "Learn React",
        completed: true
    },
    {
        id: uuidv4(),
        text: "Learn Spring Boot",
        completed: false
    }
    ]
    const local_todos = JSON.parse(localStorage.getItem("todos")) || default_todos;
    const [filter, setFilter] = useState("all");
    const [todos, setTodos] = useState(local_todos)

    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos]); 

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

    const destroyTodo = (id) => {
        const cloned_todos = [...todos];
        const itemIndex = cloned_todos.findIndex((todo) => todo.id === id);
        //console.log(itemIndex);
        cloned_todos.splice(itemIndex,1);
        setTodos(cloned_todos);
    }

    const clearTodos = () => {
        const clone_todos = [...todos];
		const new_todos = clone_todos.filter((todo) => !todo.completed);
		setTodos(new_todos)
    }

    const values = {
        todos,
        setTodos,
        addTodo,
        changeTodo,
        destroyTodo,
        clearTodos,
        filter,
        setFilter
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