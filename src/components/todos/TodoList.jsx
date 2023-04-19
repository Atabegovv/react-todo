import Todo from './Todo';

function TodoList({ todos, index, deleteTodo }) {
	return (
		<div className="todoList">
			{todos.length > 0 ? (
				todos.map((todo, index) => {
					return (
						<Todo
							key={index}
							todo={todo}
							index={index}
							deleteTodo={deleteTodo}
						/>
					);
				})
			) : (
				<h3>No tasks at the moment</h3>
			)}
		</div>
	);
}

export default TodoList;
