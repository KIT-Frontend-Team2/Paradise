import PropTypes from 'prop-types'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './styles.css'

/**
 * 해당 슬라이드는 감싸져있는 태그의 width를 100%를 채우는 슬라이드입니다.
 */
const SSlideBanner = ({ Images, isAuto, loop, ...rest }) => {
	let modules = [Pagination]
	if (isAuto) {
		modules.push(Autoplay)
	}

	return (
		<>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				loop={loop}
				modules={modules}
				{...rest}
				className="mySwiper"
			>
				{Images.map(image => (
					<SwiperSlide key={image.url}>
						<img
							src={image.url}
							alt={image.description}
							{...image}
							loading={'lazy'}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

SSlideBanner.propType = {
	/**
	 * 슬라이드로 만들어질 이미지들에 대한 정보입니다.
	 */
	Images: PropTypes.array.isRequired,
	/**
	 * 해당 슬라이드 배너를 오토로 만들지에 대해 설정합니다.
	 */
	isAuto: PropTypes.bool,
	autoplay: PropTypes.shape({
		/**
		 * 해당 슬라이더의 자동 재생되는 속도를 결정합니다 (ms)
		 */
		delay: PropTypes.number,
	}),
	/**
	 * 해당 슬라이드배너에 처음 부터 끝까지의 반복 여부를 결정합니다.
	 */
	loop: PropTypes.bool,
}

SSlideBanner.defaultValues = {
	loop: false,
	isAuto: false,
	autoplay: { delay: 2500, disableOnInteraction: false },
}

export default SSlideBanner
