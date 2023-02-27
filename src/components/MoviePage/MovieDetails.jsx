import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../../utils/service';
import StarIcon from '../Icons/StarIcon';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});

	useEffect(() => {
		getMovieDetailsById(id).then(data => setMovie(data.data));
	}, []);

	console.log(movie);

	return (
		<div
			className={style.container}
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		>
			<div className={style.backgroundDark}>
				<div className={style.info}>
					<div className={style.poster}>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						></img>
					</div>
					<div className={style.details}>
						<h1>{movie.title}</h1>
						<div className={style.stats}>
							<span>{Math.round(movie.vote_average * 10) / 10}</span>
							<StarIcon className={style.star} />
						</div>
						<p>{movie.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
