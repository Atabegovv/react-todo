import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
	return (
		<div className={styles.todo} onDoubleClick={() => deleteTodo(index)} >
			<p className={styles.todoText}>{todo}</p>
		</div>
	);
}

export default Todo;
