import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../../assets/img/1c.jpg';
import img2 from '../../assets/img/2c.jpg';
import img3 from '../../assets/img/3c.jpg';
import img4 from '../../assets/img/4c.jpg';
import img5 from '../../assets/img/5c.jpg';

export const Carousel: React.FC = () => {
	const [slidePerView, setSlidePerView] = useState(3);
	const slides = [
		{ id: '1', image: img1 },
		{ id: '2', image: img2 },
		{ id: '3', image: img3 },
		{ id: '4', image: img4 },
		{ id: '5', image: img5 },
	];

	useEffect(() => {
		function handleResize() {
			if (window.innerWidth < 720) {
				setSlidePerView(1);
			} else {
				setSlidePerView(3);
			}
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<S.CarouselContainer>
			<S.CarouselTitle>
				Conheça alguns dos nossos <strong>projetos</strong>
			</S.CarouselTitle>

			<S.CarouselNavigation>
				<Swiper
				 	modules={[Navigation, Pagination]}
					slidesPerView={slidePerView}
					pagination={{ clickable: true }}
					navigation
					loop={true}
					speed={600}
				>
					{slides.map((item) => (
						<SwiperSlide key={item.id}>
							<img src={item.image} alt='Slider' className='slide-item' />
						</SwiperSlide>
					))}
				</Swiper>
			</S.CarouselNavigation>
		</S.CarouselContainer>
	);
};
