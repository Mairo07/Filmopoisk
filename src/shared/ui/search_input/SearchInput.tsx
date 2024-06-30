import { ChangeEvent, ReactElement } from 'react';
import classes from './searchInput.module.css';
import SearchIcon from './SearchIcon';

interface Input {
	children: string;
	value: string;
	name: string;
	placeholder: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInput: React.FC<Input> = ({
	children,
	value,
	name,
	placeholder,
	onChange,
}): ReactElement => {
	return (
		<div className={classes.input_wraper}>
			<SearchIcon className={classes.searchIcon} />
			<label htmlFor={name} className={classes.visuallyHidden}>
				{children}
			</label>
			<input
				type='text'
				id={name}
				name='name'
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={classes.input}
			/>
		</div>
	);
};
