import MainLogo from 'assets/images/main-logo.png'
import React from 'react'
import styled from 'styled-components'

import useMove from '../../../hooks/useMovePage'
import Container from '../../layout/Container'
import SSlideBanner from '../../ui/molecules/SlideBanner/SSlideBanner'
import MaLineBanner from '../../ui/organisms/MaLineBanner/MaLineBanner'
import MaSection from '../../ui/organisms/MaSection/MaSection'

const MainPageTemplate = ({ productInfo }) => {
	const { linkRegister } = useMove()

	const images = [
		{
			img_url: MainLogo,
			id: 1,
		},
		{
			img_url: MainLogo,
			id: 2,
		},
		{
			img_url: MainLogo,
			id: 3,
		},
	]

	const { linkSellList, linkShareList } = useMove()
	return (
		<>
			<S.MainBannerBox>
				<SSlideBanner
					Images={images}
					loop={true}
					isAuto={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
				/>
			</S.MainBannerBox>
			<Container>
				<MaSection
					leftTitle={'우리 동네 중고 상품'}
					link={linkSellList}
					products={productInfo.sellProductList}
				/>
				<MaLineBanner
					link={linkRegister}
					subTitle={'집에 혼자있는 중고제품 팔면 돈이 된다?'}
					label={'판매하러 가기'}
					title={'수수료 없는 무료 중고거래, 나눔 사이트'}
					importText={' Paradise'}
					height={140}
				/>
				<MaSection
					leftTitle={'우리 동네 나눔 상품'}
					link={linkShareList}
					products={productInfo.freeProductList}
				/>
			</Container>
		</>
	)
}

export default MainPageTemplate

const S = {}

S.MainBannerBox = styled.div`
	height: 40vh;
`
