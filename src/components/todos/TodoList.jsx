import Todo from './Todo';

function TodoList({ todos }) {
	return (
		<div className="todoList">
			{todos.map((todo, index) => {
				return <Todo key={index} todo={todo} />;
			})}
		</div>
	);
}

export default TodoList;
