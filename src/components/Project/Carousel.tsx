import React from 'react';
import { useState, useEffect } from 'react';
import * as S from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../img/1c.png';
import img2 from '../img/2c.png';
import img3 from '../img/3c.png';
import img4 from '../img/4c.png';
import img5 from '../img/5c.png';

export const Carousel: React.FC = () => {
	const [slidePerView, setSlidePerView] = useState(2);
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
				setSlidePerView(2);
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
			<Swiper
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
		</S.CarouselContainer>
	);
};
