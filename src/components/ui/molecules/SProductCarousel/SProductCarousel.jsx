import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProductCard from '../ProductCard/ProductCard'
import './Carousel.css'

const SProductCarousel = ({ products }) => {
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)
	const swiperRef = useRef(null)

	SwiperCore.use([Navigation])

	const handleNext = () => {
		if (swiperRef.current.swiper.isBeginning) {
			setIsBeginning(!swiperRef.current.swiper.isBeginning)
		}
		swiperRef.current.swiper.slideNext()
		if (swiperRef.current.swiper.isEnd) {
			setIsEnd(true)
		}
	}

	const handlePrev = () => {
		if (swiperRef.current.swiper.isEnd) {
			setIsEnd(!swiperRef.current.swiper.isEnd)
		}
		swiperRef.current.swiper.slidePrev()
		if (swiperRef.current.swiper.isBeginning) {
			setIsBeginning(true)
		}
	}

	return (
		<S.Wrapper>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				navigation={false}
				modules={[Navigation]}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					900: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
					1100: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
				className="mySwiper"
				ref={swiperRef}
			>
				{products.map((product) => (
					<SwiperSlide key={product.product_id}>
						<ProductCard
							size={200}
							isLike={product.isLike}
							like={product.product_like}
							content={product.product_content}
							place={product.product_place}
							chat_count={product.product_chat_count}
							id={product.product_id}
							time={product.product_update_at}
							img_url={product.product_main_img_url}
							name={product.product_name}
							price={product.product_price}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div
				className={
					'swiper-button-prev' + (!isBeginning ? '' : ' swiper-button-disabled')
				}
				onClick={handlePrev}
			/>
			<div
				className={
					'swiper-button-next' + (!isEnd ? '' : ' swiper-button-disabled')
				}
				onClick={handleNext}
			/>
		</S.Wrapper>
	)
}

export default SProductCarousel

SProductCarousel.propTypes = {
	/**
	 * 슬라이드에 들어갈 Product 카드 내의 정보들에 대한 배열입니다.
	 */
	products: PropTypes.array,
}

const S = {}

S.Wrapper = styled.div`
	position: relative;
`
