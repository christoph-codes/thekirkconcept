import styles from './Input.module.scss';

export const Input = ({ className, name, label, ...rest }) => {
	return (
		<label className={`${styles.InputLabel}`} htmlFor={name}>
			<span>{label}</span>
			<input
				className={`${styles.Input} ${className} bg-gray-lightest rounded`}
				name={name}
				{...rest}
			/>
		</label>
	);
};
export const Dropdown = ({ className, name, children, label, ...rest }) => {
	return (
		<label className={`${styles.InputLabel}`} htmlFor={name}>
			<span>{label}</span>
			<select
				className={`${styles.Input} ${className} bg-gray-lightest rounded`}
				name={name}
				{...rest}
			>
				{children}
			</select>
		</label>
	);
};
export const TextArea = ({ className, name, children, label, ...rest }) => {
	return (
		<label className={`${styles.InputLabel}`} htmlFor={name}>
			<span>{label}</span>
			<textarea
				className={`${styles.Input} ${className} bg-gray-lightest rounded`}
				name={name}
				{...rest}
			>
				{children}
			</textarea>
		</label>
	);
};
