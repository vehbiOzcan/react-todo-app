import React, { useEffect, useState } from 'react'
import { useTodos } from '../context/TodoContext'


function ContentFooter() {

	const { todos, setTodos, clearTodos, filter, setFilter } = useTodos();
	const [filtered_todos, setFilteredTodos] = useState(todos);

	const handleClearTodos = () => {
		clearTodos();
	}

	useEffect(() => {
		if (filter !== "all")
			setFilteredTodos(todos.filter((todo) => filter === "active" ? todo.completed === false : todo.completed === true))
		else
			setFilteredTodos(todos);
		
	}, [filter,todos])

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{filtered_todos.length} </strong>
				item{filtered_todos.length > 1 && "s"} {filter !== "completed" && "left"}
			</span>

			<ul className="filters">
				<li>
					<a href="#/" onClick={() => setFilter("all")} className={filter === "all" ? "selected" : ""} >All</a>
				</li>
				<li>
					<a href="#/" onClick={() => setFilter("active")} className={filter === "active" ? "selected" : ""} >Active</a>
				</li>
				<li>
					<a href="#/" onClick={() => setFilter("completed")} className={filter === "completed" ? "selected" : ""} >Completed</a>
				</li>
			</ul>

			<button onClick={handleClearTodos} className="clear-completed">
				Clear completed
			</button>
		</footer>
	)
}

export default ContentFooter