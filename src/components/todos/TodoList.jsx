import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
	return (
		<div className="todoList">
			{todos.length > 0 ? (
				todos.map((todo) => {
					return (
						<Todo
							key={todo.id}
							todo={todo}
							deleteTodo={deleteTodo}
							toggleTodo={toggleTodo}
						/>
					);
				})
			) : (
				<h3>No todo at the moment</h3>
			)}
		</div>
	);
}

export default TodoList;
