import styles from './Todo.module.css'

function Todo({ todo }) {
	return (
		<div className={styles.todo}>
			<p className={styles.todoText}>{todo}</p>
		</div>
	);
}

export default Todo;
