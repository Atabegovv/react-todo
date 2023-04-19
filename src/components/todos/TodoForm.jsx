import { useState } from 'react';
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
	const [text, setText] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();
		addTodo(text);
		setText('');
	};

	return (
		<form onSubmit={onSubmitHandler} className={styles.form}>
			<input
				type="text"
				placeholder="enter todo.."
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default TodoForm;
