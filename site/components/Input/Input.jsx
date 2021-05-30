import styles from './Input.module.scss';

export const Input = ({ className, ...rest }) => {
	return (
		<input
			className={`${styles.Input} ${className} bg-gray-lightest rounded`}
			{...rest}
		/>
	);
};
export const Dropdown = ({ className, children, ...rest }) => {
	return (
		<select
			className={`${styles.Input} ${className} bg-gray-lightest rounded`}
			{...rest}
		>
			{children}
		</select>
	);
};
export const TextArea = ({ className, children, ...rest }) => {
	return (
		<textarea
			className={`${styles.Input} ${className} bg-gray-lightest rounded`}
			{...rest}
		>
			{children}
		</textarea>
	);
};
