import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../shared/api/moviesApi';
import { MovieCard } from '../../widget/movieCard/MovieCard';
import { ActorsGallery } from '../../widget/ActorsGallery/ActorsGallery';

export const MoviePage = (): ReactElement => {
	const { id = '' } = useParams();
	const { data, error, isLoading } = useGetMovieByIdQuery(id);
	console.log({ data, error, isLoading });

	if (!data) {
		return <h2>Нет данных</h2>;
	}

	return (
		<>
			<MovieCard
				key={data.id}
				title={data.title}
				description={data.description}
				poster={data.poster}
				release_year={data.release_year}
				genre={data.genre}
				rating={data.rating}
			/>
			<ActorsGallery actors={data.actors} />
		</>
	);
};
