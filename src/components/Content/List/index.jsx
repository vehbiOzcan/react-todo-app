import React from 'react'
import { useTodos } from '../../../context/TodoContext'
import ListItem from './ListItem';

function List() {

    const { todos } = useTodos();

    return (
        <ul className="todo-list">
            {
                todos.map((todo) => (
                    <ListItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    )
}

export default List