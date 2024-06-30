import { ReactElement } from 'react';
import {
	FilterState,
	PartialFilterState,
} from '../../shared/module/filter/filterSlice';
import classes from './filterWidget.module.css';
import { GENRES, YEARS } from '../../constans/constans';
import Dropdown from '../../shared/ui/dropdown/Dropdown';

interface FilterWidgetProps extends FilterState {
	onChange(options: PartialFilterState): void;
}

export const FilterWidget: React.FC<FilterWidgetProps> = ({
	onChange,
	genre,
	year,
}): ReactElement => {
	const handleGenreChange = (key: string) => {
		const genre = key === '0' ? '' : key;
		onChange({ genre });
	};

	const handleYearChange = (key: string) => {
		const year = key === '0' ? '' : key;
		onChange({ year });
	};

	return (
		<div className={classes.filterWidget}>
			<label> Жанр </label>
			<Dropdown
				placeholder='Выберите жанр'
				onChange={handleGenreChange}
				options={GENRES}
				selected={genre}
			/>
			<label> Год </label>
			<Dropdown
				placeholder='Выберите год'
				onChange={handleYearChange}
				options={YEARS}
				selected={year}
			/>
		</div>
	);
};
