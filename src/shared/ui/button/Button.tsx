import { ReactElement } from 'react';
import classes from './button.module.css';

type Mode = 'primary' | 'outline';

interface Button {
	children: string;
	mode?: Mode;
	type?: 'button' | 'submit' | 'reset';
	onClick: () => void;
}

const getClassName = (mode: Mode): string => {
	switch (mode) {
		case 'primary':
			return classes.buttonPrimary;
		case 'outline':
			return classes.buttonOutline;
	}
};

export const Button: React.FC<Button> = ({
	children,
	mode = 'primary',
	type = 'button',
	onClick,
}): ReactElement => {
	return (
		<button
			className={`${classes.button} ${getClassName(mode)}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
