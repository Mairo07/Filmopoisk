import { ReactElement, useState } from 'react';
import StarDefault from './StarDefault';
import classes from './rating.module.css';

const rate = [1, 2, 3, 4, 5];

interface RatingProps {
	selected: number;
	disabled?: boolean;
	onClick(num: number): void;
}

export const Rating: React.FC<RatingProps> = ({
	selected = 0,
	disabled = false,
	onClick,
}): ReactElement => {
	const [hoverIndex, setHoverIndex] = useState(0);
	const handleMouseEnter = (v: number) => {
		if (disabled) {
			return;
		}
		setHoverIndex(Math.max(v, selected));
	};
	const handleMouseLeave = () => {
		if (disabled) {
			return;
		}
		if (selected > 0) {
			setHoverIndex(selected);
		} else {
			setHoverIndex(0);
		}
	};
	return (
		<div className={classes.rating}>
			{rate.map((v) => {
				return (
					<div
						key={v}
						className={`${classes.element} ${hoverIndex >= v ? classes.elementIconHover : ''}`}
						onMouseEnter={() => handleMouseEnter(v)}
						onMouseLeave={handleMouseLeave}
						onClick={() => onClick(v)}
					>
						<StarDefault className={classes.elementIcon} />
						<span>{v}</span>
					</div>
				);
			})}
		</div>
	);
};
