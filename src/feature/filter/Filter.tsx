import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../shared/hook/redux';

import classes from './filter.module.css';
import { FilterWidget } from '../../widget/filter/FilterWidget';
import {
	PartialFilterState,
	changeFilter,
} from '../../shared/module/filter/filterSlice';

export const Filters = () => {
	const filter = useAppSelector((state) => state.filter);
	console.log(filter);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const searchParams = new URLSearchParams();
		if (filter.search) {
			searchParams.set('title', filter.search);
		}
		if (filter.genre.length > 0) {
			searchParams.set('genre', filter.genre.toString());
		}
		if (filter.year) {
			searchParams.set('release_year', filter.year);
		}

		navigate({ search: searchParams.toString() });
	}, [filter, navigate]);

	const handleChange = (options: PartialFilterState) => {
		dispatch(changeFilter(options));
	};
	return (
		<div className={classes.filterContainer}>
			<FilterWidget
				search={filter.search}
				genre={filter.genre}
				year={filter.year}
				onChange={handleChange}
			/>
		</div>
	);
};
