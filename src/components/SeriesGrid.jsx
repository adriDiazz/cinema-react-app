import { useEffect, useState } from 'react';
import { config } from '../utils/config';
import { getPopularMovies } from '../utils/service';
import Filter from './Filter';
import style from './MovieGrid.module.css';
import NextPage from './NextPage';

const SeriesGrid = ({ getter }) => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);
	const [filter, setFilter] = useState(80);
	const [loading, setLoading] = useState(true);

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

			<NextPage setPage={setPage} loading />
		</>
	);
};

export default SeriesGrid;
