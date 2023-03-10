import { useEffect, useState } from 'react';
import { config } from '../utils/config';
import { getPopularMovies } from '../utils/service';
import Filter from './Filter';
import style from './MovieGrid.module.css';
import NextPage from './NextPage';

const MovieGrid = ({ getter }) => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);
	const [filter, setFilter] = useState(28);
	const [loading, setLoading] = useState(true);

	const filteredMovies = movies.filter(movie => {
		return movie?.genre_ids.includes(Number(filter));
	});

	useEffect(() => {
		getter(page).then(data => {
			setMovies(prev => [...prev, ...data.data]);
			setLoading(false);
		});
	}, [page]);

	return (
		<>
			<Filter setFilter={setFilter} />

			<div className={style.wraper}>
				{filteredMovies.map(movie => (
					<div className={style.movie} key={movie.id}>
						<img
							src={config.POSTER_URL + movie.poster_path}
							alt=''
							className={style.img}
						/>
					</div>
				))}
			</div>

			<NextPage setPage={setPage} loading />
		</>
	);
};

export default MovieGrid;
