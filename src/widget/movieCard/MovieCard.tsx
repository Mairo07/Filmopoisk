import { ReactElement, useState } from 'react';
import classes from './movieCard.module.css';
import { Rating } from '../../shared/ui/rating/Rating';
import { useAppSelector } from '../../shared/hook/redux';

interface IMovieCard {
	key: string;
	title: string;
	description: string;
	poster: string;
	release_year: number;
	genre: string;
	rating: string;
}

export const MovieCard: React.FC<IMovieCard> = ({
	key,
	title,
	description,
	poster,
	release_year,
	genre,
	rating,
}): ReactElement => {
	const token = useAppSelector((state) => state.auth.token);
	const [selectedRating, setSelectedRating] = useState(0);
	const handleRatingClick = (num: number) => {
		setSelectedRating(num);
	};
	return (
		<article key={key} className={classes.movieCard}>
			<img
				src={poster}
				alt={`Постер фильма ${title}`}
				className={classes.movieCardPoster}
			/>
			<div className={classes.movieCardDescription}>
				<h1 className={classes.movieCardTitle}>{title}</h1>
				<p className={classes.row}>
					<span className={classes.rowLabel}>Жанр: </span>
					{genre}
				</p>
				<p className={classes.row}>
					<span className={classes.rowLabel}>Год выпуска: </span>
					{release_year}
				</p>
				<p className={classes.row}>
					<span className={classes.rowLabel}>Рейтинг: </span>
					{rating}
				</p>
				<p className={classes.descriptionLabel}>Описание</p>
				<p className={classes.descriptionText}>{description}</p>
			</div>
			{token && (
				<div className={classes.ratingWraper}>
					<Rating
						selected={selectedRating}
						onClick={handleRatingClick}
					></Rating>
				</div>
			)}
		</article>
	);
};
