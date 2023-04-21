import styles from './Button.module.css';

function Button(props) {
	const { onClick, children, disabled = false } = props;
	return (
		<button
			{...props}
			className={styles.button}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
