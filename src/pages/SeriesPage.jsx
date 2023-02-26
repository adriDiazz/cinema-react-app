import Footer from '../components/Footer';
import MovieGrid from '../components/MovieGrid';
import MovieSwiper from '../components/MovieSwiper';
import NavBar from '../components/NavBar';
import SeriesGrid from '../components/SeriesGrid';
import SwiperHeader from '../components/SwiperHeader';
import { getPopularSeries } from '../utils/service';
import style from './SeriesPage.module.css';

const SeriesPage = () => {
	return (
		<>
			<NavBar />
			<SwiperHeader />
			<div className={style.wraper3}>
				<SeriesGrid getter={getPopularSeries} />
			</div>
			<Footer />
		</>
	);
};

export default SeriesPage;
