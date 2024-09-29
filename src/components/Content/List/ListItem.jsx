import React from 'react'
import {useTodos} from '../../../context/TodoContext'
function ListItem({todo}) {

    const  {todos,setTodos,changeTodo,destroyTodo} = useTodos()

    const handleAddTodo = (id) => {
        // const clone_todos = [...todos];
        // const itemIndex = clone_todos.findIndex((todo) => todo.id === id);
        // //console.log(itemIndex)
        // const item = todos[itemIndex];
        // //console.log(item);
        // item.completed = !item.completed;
        // setTodos(clone_todos);

        changeTodo(id);
    }

    const handleDestroy = (id) => {
       destroyTodo(id)
    }

    return (
        <li className={todo.completed ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => handleAddTodo(todo.id)}/>
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => handleDestroy(todo.id)}></button>
            </div>
        </li>
    )
}

export default ListItem