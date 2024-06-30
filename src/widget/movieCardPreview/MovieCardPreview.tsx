import { ReactElement, useState } from 'react';
import classes from './movieCardPreview.module.css';
import { Rating } from '../../shared/ui/rating/Rating';
import { useAppSelector } from '../../shared/hook/redux';

interface IMovieCardPreview {
	key: string;
	title: string;
	description: string;
	poster: string;
	release_year: number;
	genre: string;
}

export const MovieCardPreview: React.FC<IMovieCardPreview> = ({
	key,
	title,
	description,
	poster,
	release_year,
	genre,
}): ReactElement => {
	const token = useAppSelector((state) => state.auth.token);
	const [selectedRating, setSelectedRating] = useState(0);
	const handleRatingClick = (num: number) => {
		setSelectedRating(num);
	};
	return (
		<li key={key} className={classes.movieCardPreview}>
			<img
				src={poster}
				alt={`Постер фильма ${title}`}
				className={classes.movieCardPreviewPoster}
			/>
			<div className={classes.movieCardPreviewDescription}>
				<h2 className={classes.movieCardPreviewTitle}>{title}</h2>
				<div className={classes.row}>
					<span className={classes.rowLabel}>Жанр</span>
					<span className={classes.rowText}>{genre}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.rowLabel}>Год выпуска</span>
					<span className={classes.rowText}>{release_year}</span>
				</div>
				<div className={classes.row}>
					<span className={classes.rowLabel}>Описание</span>
					<span className={(classes.rowText, classes.rowTextDescription)}>
						{description}
					</span>
				</div>
			</div>
			{token && (
				<Rating selected={selectedRating} onClick={handleRatingClick}></Rating>
			)}
		</li>
	);
};
