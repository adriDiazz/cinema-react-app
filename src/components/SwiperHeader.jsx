import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import style from './SwiperHeader.module.css';
import StarIcon from './Icons/StarIcon';
import Button from './UI/Button';
import { useState } from 'react';

const SwiperHeader = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);

	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
		>
			<SwiperSlide>
				<div className={style.header}>
					<div className={style.backgroundDark}>
						<div className={style.info}>
							<h2>Avatar: The Way of Water</h2>
							<p>
								Nearly 5,000 years after he was bestowed with the almighty
								powers of the Egyptian gods—and imprisoned just as quickly—Black
								Adam is freed from his earthly tomb, ready to unleash his unique
								form of justice on the modern world.
							</p>
							<div className={style.stats}>
								<StarIcon />
								<span>7.6</span>
								<Button>Watch now</Button>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={style.header}>
					<div className={style.backgroundDark}>
						<div className={style.info}>
							<h2>Avatar: The Way of Water</h2>
							<p>
								Nearly 5,000 years after he was bestowed with the almighty
								powers of the Egyptian gods—and imprisoned just as quickly—Black
								Adam is freed from his earthly tomb, ready to unleash his unique
								form of justice on the modern world.
							</p>
							<div className={style.stats}>
								<StarIcon />
								<span>7.6</span>
								<Button>Watch now</Button>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default SwiperHeader;
