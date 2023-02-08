import { useEffect, useState } from 'react';
import { config } from '../utils/config';
import { getPopularMovies, getTrendingMovies } from '../utils/service';
import style from './MovieGrid.module.css';

const MovieGrid = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);

	useEffect(() => {
		getPopularMovies(page).then(data => setMovies(data.data));
	}, []);

	return (
		<div className={style.wraper}>
			{movies.map(movie => (
				<div className={style.movie} key={movie.id}>
					<img
						src={config.POSTER_URL + movie.poster_path}
						alt=''
						className={style.img}
					/>
				</div>
			))}
		</div>
	);
};

export default MovieGrid;
