import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';
import TodoActions from './components/todos/TodoActions';
import './App.css';

function App() {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuidv4(),
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) => {
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo };
			})
		);
	};

	const resetTodosHandler = () => {
		setTodos([]);
	};

	const deleteCompletedTodosHandler = () => {
		setTodos(todos.filter((todo) => !todo.isCompleted));
	};

	const resCompletedTodos = todos.filter((todo) => todo.isCompleted).length;

	return (
		<div className="App">
			<h2>TODO APP</h2>

			<TodoForm addTodo={addTodoHandler} />

			{todos.length > 0 && (
				<TodoActions
					resetTodos={resetTodosHandler}
					deleteCompletedTodos={deleteCompletedTodosHandler}
					completedTodosExits={!!resCompletedTodos}
				/>
			)}

			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>

			{resCompletedTodos > 0 && (
				<h3>{`You have completed ${resCompletedTodos} ${
					resCompletedTodos > 1 ? 'todos' : 'todo'
				} `}</h3>
			)}
		</div>
	);
}

export default App;
