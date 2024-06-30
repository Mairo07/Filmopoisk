import React, { useState, useEffect, useRef } from 'react';
import classes from './dropdown.module.css';
import Arrow from './Arrow';

export interface Option {
	value: string;
	key: string;
}

interface DropdownProps {
	options: Record<string, string>;
	onChange: (key: string) => void;
	placeholder: string;
	selected?: string;
}

const convertToArray = (obj: Record<string, string>) => {
	return Object.keys(obj).map((key) => ({ value: obj[key], key }));
};

const Dropdown: React.FC<DropdownProps> = ({
	options,
	onChange,
	placeholder,
	selected,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (key: string) => {
		setIsOpen(false);
		onChange(key);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className={classes.dropdown} ref={dropdownRef}>
			<div
				className={`${classes.dropdownHeader} ${!selected ? classes.placeholder : ''}`}
				onClick={handleToggleDropdown}
				aria-hidden='true'
			>
				{selected ? options[selected] : placeholder}
				<span className={`${classes.arrow} ${isOpen ? classes.open : ''}`}>
					<Arrow className={classes.arrowIcon} />
				</span>
			</div>
			{isOpen && (
				<ul className={classes.dropdownList}>
					{convertToArray(options).map((option) => (
						<li
							key={option.key}
							className={classes.dropdownItem}
							onClick={() => handleOptionClick(option.key)}
						>
							{option.value}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
