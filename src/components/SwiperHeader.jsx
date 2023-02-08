import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../utils/service';
import MovieSwiper from './MovieSwiper';

const SwiperHeader = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getTrendingMovies().then(movies => {
			if (movies.error) {
				setError(true);
				setLoading(false);
				return;
			}
			setLoading(false);
			setTrendingMovies(movies.data);
		});
	}, []);

	return (
		<>
			{loading ? <h1>Loading...</h1> : <MovieSwiper movies={trendingMovies} />}
			{error && <h1>Something went wrong</h1>}
		</>
	);
};

export default SwiperHeader;
