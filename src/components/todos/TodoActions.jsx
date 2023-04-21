import { RiRefreshLine, RiDeleteBin3Line } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

function TodoActions({ resetTodos, deleteCompletedTodos, completedTodosExits }) {
	return (
		<div className={styles.btnsRow}>
			<Button title="Reset todo app" onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
			<Button title="Delete completed todos" onClick={deleteCompletedTodos} disabled={!completedTodosExits}>
				<RiDeleteBin3Line />
			</Button>
		</div>
	);
}

export default TodoActions;
