import StarIcon from './Icons/StarIcon';
import Button from './UI/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

import style from './MovieSwiper.module.css';
import { config } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const MovieSwiper = ({ movies, poster }) => {
	const navigate = useNavigate();
	let breakpoints;

	if (poster) {
		breakpoints = {
			320: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 40
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 50
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 50
			}
		};
	} else {
		breakpoints = {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 40
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 50
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 50
			}
		};
	}

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={poster ? 5 : 1}
			breakpoints={breakpoints}
			modules={([EffectFade], [Autoplay])}
			effect='fade'
			loop={!poster}
			autoplay={poster ? false : { delay: 5000, disableOnInteraction: false }}
		>
			{movies?.map(movie =>
				poster ? (
					<SwiperSlide key={movie.id}>
						<img
							src={config.POSTER_URL + movie.poster_path}
							alt=''
							className={style.img}
							onClick={() => navigate(`/movie/${movie.id}`)}
						/>
					</SwiperSlide>
				) : (
					<SwiperSlide key={movie.id}>
						<div
							className={style.header}
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
							}}
						>
							<div className={style.backgroundDark}>
								<div className={style.info}>
									<h2>{movie.title}</h2>
									<p>{movie.overview}</p>
									<div className={style.stats}>
										<StarIcon />
										<span>{Math.round(movie.vote_average * 10) / 10}</span>
										<Button>Watch now</Button>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				)
			)}
		</Swiper>
	);
};

export default MovieSwiper;
