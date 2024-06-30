import { ReactElement } from 'react';
import { Actor } from '../../shared/api/types';
import classes from './actorsGallery.module.css';

type ActorsProps = {
	actors: Actor[];
};

export const ActorsGallery: React.FC<ActorsProps> = ({
	actors,
}): ReactElement => {
	return (
		<>
			<h2 className={classes.actorsTitle}>Актёры</h2>
			<ul className={classes.actorsList}>
				{actors.map((actor, index) => {
					return (
						<li key={index} className={classes.actorCard}>
							<img
								src={actor.photo}
								alt={actor.name}
								className={classes.actorPhoto}
							/>
							<span className={classes.actorTitle}>{actor.name}</span>
						</li>
					);
				})}
			</ul>
		</>
	);
};
