import Filter from '../components/Filter';
import Footer from '../components/Footer';
import MovieGrid from '../components/MovieGrid';
import NavBar from '../components/NavBar';
import NextPage from '../components/NextPage';
import SwiperHeader from '../components/SwiperHeader';
import style from './MoviesPage.module.css';

const MoviesPage = () => {
	return (
		<>
			<NavBar />
			<SwiperHeader />
			<div className={style.wraper3}>
				<Filter />
				<MovieGrid />
				<NextPage />
			</div>
			<Footer />
		</>
	);
};

export default MoviesPage;
