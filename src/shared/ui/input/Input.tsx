import { ChangeEvent, ReactElement } from 'react';
import classes from './input.module.css';

interface Input {
	children: string;
	name: string;
	type?: string;
	id: string;
	value: string;
	placeholder: string;
	required: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Input: React.FC<Input> = ({
	children,
	name,
	type = 'text',
	placeholder,
	required = true,
	onChange,
}): ReactElement => {
	return (
		<div className={classes.input_wraper}>
			<label htmlFor={name} className={classes.input_label}>
				{children}
			</label>
			<input
				type={type}
				id={name}
				name='name'
				onChange={onChange}
				placeholder={placeholder}
				className={classes.input}
				required={required}
			/>
		</div>
	);
};
