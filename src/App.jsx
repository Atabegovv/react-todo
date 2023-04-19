import { useState } from 'react';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';
import './App.css';

function App() {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		setTodos([...todos, text]);
	};

	const deleteTodoHandler = (index) => {
		setTodos(todos.filter((_, idx) => idx !== index));
	};

	return (
		<div className="App">
			<h2>TODO APP</h2>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler} />
		</div>
	);
}

export default App;
