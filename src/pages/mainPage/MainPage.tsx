import { ReactElement } from 'react';
import { MovieCardPreview } from '../../widget/movieCardPreview/MovieCardPreview';
import { useGetMoviesListQuery } from '../../shared/api/moviesApi';
import classes from './mainPage.module.css';
import { Filters } from '../../feature/filter/Filter';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchWidget } from '../../widget/SearchWidget/SearchWidget';
import { useAppDispatch, useAppSelector } from '../../shared/hook/redux';
import {
	PartialFilterState,
	changeFilter,
} from '../../shared/module/filter/filterSlice';

export const MainPage = (): ReactElement => {
	const location = useLocation();
	const { data, error, isLoading } = useGetMoviesListQuery(location.search);
	const dispatch = useAppDispatch();
	const filter = useAppSelector((state) => state.filter);
	const navigate = useNavigate();

	const handleChange = (options: PartialFilterState) => {
		dispatch(changeFilter(options));
	};

	const handleClick = (id: string) => {
		navigate(`/movie/${id}`);
	};
	console.log({ data, error, isLoading });

	return (
		<div className={classes.main}>
			<Filters />
			<div>
				<SearchWidget search={filter.search} onChange={handleChange} />
				<ul className={classes.movieCardsList}>
					{data ? (
						data['search_result'].map((value) => {
							return (
								<MovieCardPreview
									key={value.id}
									id={value.id}
									title={value.title}
									poster={value.poster}
									genre={value.genre}
									release_year={value.release_year}
									description={value.description}
									onClick={handleClick}
								/>
							);
						})
					) : (
						<span>...is Loading</span>
					)}
				</ul>
			</div>
		</div>
	);
};
