import React from 'react'
import { useTodos } from '../../../context/TodoContext'
import ListItem from './ListItem';

let filtered = null;

function List() {

    const { todos, filter } = useTodos();
    
    filtered = todos;
    
    if (filter !== "all")
        filtered = todos.filter((todo) => filter === "active" ? todo.completed === false : todo.completed === true)

    return (
        <ul className="todo-list">
            {
                filtered.map((todo) => (
                    <ListItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    )
}

export default List