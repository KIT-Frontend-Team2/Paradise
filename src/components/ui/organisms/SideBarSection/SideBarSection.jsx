import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import NorthIcon from '@mui/icons-material/North'
import sideBanner from 'assets/images/sideBanner.png'
import React, { useRef } from 'react'
import styled from 'styled-components'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import useMove from '../../../../hooks/useMovePage'
import SiDeleteButton from '../../molecules/SiDeleteButton/SiDeleteButton'
import './sideBar.css'

const SideBarSection = ({ products }) => {
	const swiperRef = useRef(null)

	const handleNext = () => {
		swiperRef.current.swiper.slideNext()
	}

	const handlePrev = () => {
		swiperRef.current.swiper.slidePrev()
	}

	const MoveTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const { linkRegister } = useMove()

	return (
		<S.Container>
			<S.TopLogo>
				<img src={sideBanner} alt={'사이드 로고'} height={120} />
			</S.TopLogo>
			{products.length !== 0 && (
				<S.SideBarBox>
					<S.SideBarTitle>최근 본 상품</S.SideBarTitle>
					<S.BannerBox>
						<S.PrevButton onClick={handlePrev}>
							<ExpandLessIcon />
						</S.PrevButton>
						<S.SlideBox height={(products.length === 1).toString()}>
							<Swiper
								allowTouchMove={false}
								loop={true}
								slidesPerView={products.length === 1 ? 1 : 2}
								spaceBetween={10}
								direction={'vertical'}
								className="mySwiper"
								ref={swiperRef}
							>
								{products.map(product => {
									const { idx, img_url } = product.Product
									return (
										<SwiperSlide key={idx}>
											<SiDeleteButton idx={idx} img_url={img_url} />
										</SwiperSlide>
									)
								})}
							</Swiper>
						</S.SlideBox>
						<S.NextButton onClick={handleNext}>
							<ExpandMoreIcon />
						</S.NextButton>
					</S.BannerBox>
				</S.SideBarBox>
			)}
			<S.SalesButton onClick={linkRegister}>물품 판매</S.SalesButton>
			<S.TopButton onClick={MoveTop}>
				<span>TOP</span> <NorthIcon sx={{ fontSize: '13px' }} />
			</S.TopButton>
		</S.Container>
	)
}

export default SideBarSection

const S = {}

S.Container = styled.div`
	position: sticky;
	top: 20%;
	transform: translateY(-50%);
	width: 80px;
	font-size: 12px;
	line-height: 16px;
	color: rgb(51, 51, 51);
	letter-spacing: -0.3px;
	height: 100px;
`
S.SlideBox = styled.div`
	height: ${({ height }) => (height === 'true' ? 80 : 160)}px;
`

S.PrevButton = styled.div`
	height: 10px;
	margin-bottom: 12px;
`

S.NextButton = styled.div`
	height: 10px;
`

S.BannerBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

S.TopLogo = styled.div`
	height: 120px;
	margin-bottom: 7px;
`

S.SideBarBox = styled.div`
	box-sizing: border-box;
	border: 1px solid #ddd;
	background: #fff;
	padding: 10px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	align-items: center;
`
S.EmptyBox = styled.div`
	width: 80px;
	display: flex;
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
`

S.SideBarTitle = styled.div`
	width: 80px;
	color: ${({ theme }) => theme.PALETTE.black};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	text-align: center;
`

S.TopButton = styled(S.SideBarBox)`
	display: flex;
	flex-direction: row;
	margin: 10px 0 10px 0;
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	line-height: 13px;
	cursor: pointer;
`

S.SalesButton = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.primary[200]};
	text-align: center;
	padding: 5px;
	box-sizing: border-box;
	cursor: pointer;
`

S.SalesTitle = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`

S.SalesLink = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 5px;
`

S.SalesButton = styled(S.TopButton)`
	color: ${({ theme }) => theme.PALETTE.secondary};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
