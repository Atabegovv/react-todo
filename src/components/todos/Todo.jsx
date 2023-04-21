import { RiTodoFill, RiDeleteBin2Fill } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
	return (
		<div
			className={`${styles.todo} ${
				todo.isCompleted ? styles.completedTodo : ''
			}`}
		>
			<RiTodoFill className={styles.todoIcon} />
			<p className={styles.todoText}>{todo.text}</p>
			<RiDeleteBin2Fill
				className={styles.deleteIcon}
				onClick={() => deleteTodo(todo.id)}
			/>
			<AiOutlineCheckCircle
				className={styles.checkIcon}
				onClick={() => toggleTodo(todo.id)}
			/>
		</div>
	);
}

export default Todo;
