import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import useMove from '../../../hooks/useMovePage'
import Container from '../../layout/Container'
import SSlideBanner from '../../ui/molecules/SlideBanner/SSlideBanner'
import MaLineBanner from '../../ui/organisms/MaLineBanner/MaLineBanner'
import MaSection from '../../ui/organisms/MaSection/MaSection'

const MainPageTemplate = ({ mainLogo, productInfo }) => {
	const { linkRegister } = useMove()
	const { linkSellList, linkShareList } = useMove()

	const { usedProduct, freeProduct } = productInfo

	return (
		<>
			<S.MainBannerBox>
				<SSlideBanner
					Images={mainLogo}
					loop={true}
					isAuto={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
				/>
			</S.MainBannerBox>
			<Container>
				<MaSection
					leftTitle={'우리동네 중고 상품'}
					link={linkSellList}
					products={usedProduct}
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
					leftTitle={'우리동네 나눔 상품'}
					link={linkShareList}
					products={freeProduct}
				/>
			</Container>
		</>
	)
}

export default MainPageTemplate

MainPageTemplate.proptype = {
	/**
	 * 메인 배너에 들어갈 이미지들을 넣어주세요
	 */
	mainLogo: PropTypes.object.isRequired,
	/**
	 * 메인 화면에 보여줄 상품들의 정보를 넣어주세요
	 */
	productInfo: PropTypes.object.isRequired,
}

const S = {}

S.MainBannerBox = styled.div`
	height: 510px;
`
