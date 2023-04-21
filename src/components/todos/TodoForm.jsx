import { useState } from 'react';
import { MdOutlineSendAndArchive } from 'react-icons/md'
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

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
			<Button type="submit" title="Submit">
				<MdOutlineSendAndArchive />
			</Button>
		</form>
	);
}

export default TodoForm;
