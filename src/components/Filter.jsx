import Select from './UI/Select';
import style from './Filter.module.css';
import { useEffect, useState } from 'react';
import { getGenres } from '../utils/service';

const Filter = ({ setFilter }) => {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		getGenres().then(data => setGenres(data.data));
	}, []);

	return (
		<div className={style.wraper}>
			<h2 className={style.title}>Movies</h2>
			<Select
				onChange={e => {
					if (e.target.value !== 'Genre') setFilter(e.target.value);
					else setFilter(28);
				}}
			>
				<option>Genre</option>
				{genres.map((genre, index) => (
					<option key={genre.id} value={genre.id}>
						{genre.name}
					</option>
				))}
			</Select>
		</div>
	);
};

export default Filter;
