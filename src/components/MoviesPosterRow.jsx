import { useEffect, useState } from 'react';
import MovieSwiper from './MovieSwiper';
import style from './MoviesPosterRow.module.css';

const MoviesPosterRow = ({ getter, title }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getter(1).then(movies => {
			console.log(movies);
			setMovies(movies.data);
		});
	}, []);

	return (
		<>
			<h2 className={style.title}>{title}</h2>
			<div className={style.films}>
				<MovieSwiper movies={movies} poster />
			</div>
		</>
	);
};

export default MoviesPosterRow;
