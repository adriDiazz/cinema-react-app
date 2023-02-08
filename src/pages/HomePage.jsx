import Footer from '../components/Footer';
import MoviesPosterRow from '../components/MoviesPosterRow';
import NavBar from '../components/NavBar';

import SwiperHeader from '../components/SwiperHeader';
import {
	getPopularMovies,
	getPopularSeries,
	getTopRatedMovies,
	getTopRatedSeries
} from '../utils/service';
import style from './HomePage.module.css';

const HomePage = () => {
	return (
		<>
			<NavBar />
			<SwiperHeader />
			<div className={style.films}>
				<MoviesPosterRow getter={getPopularMovies} title='Popular Movies' />
				<MoviesPosterRow getter={getTopRatedMovies} title='Top Rated Movies' />
				<MoviesPosterRow getter={getPopularSeries} title='Popular Series' />
				<MoviesPosterRow getter={getTopRatedSeries} title='Top Rated Series' />
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
