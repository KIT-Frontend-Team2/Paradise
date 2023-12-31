import MBanner1 from 'assets/images/m_main_1.jpg'
import MBanner2 from 'assets/images/m_main_2.jpg'
import PcBanner1 from 'assets/images/pc_main_1.jpg'
import PcBanner2 from 'assets/images/pc_main_2.jpg'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import useSidebar from '../../../hooks/common/useSidebar'
import { useDevice } from '../../../hooks/mediaQuery/useDevice'
import useMove from '../../../hooks/useMovePage'
import Container from '../../layout/Container'
import SSlideBanner from '../../ui/molecules/SlideBanner/SSlideBanner'
import EmptySection from '../../ui/organisms/EmptySection/EmptySection'
import MaLineBanner from '../../ui/organisms/MaLineBanner/MaLineBanner'
import MaSection from '../../ui/organisms/MaSection/MaSection'

const MainPageTemplate = ({ productInfo }) => {
	const { linkRegister, linkBannerPage } = useMove()
	const { linkSellList, linkShareList } = useMove()
	const { isMobile } = useDevice()
	useSidebar()
	const { usedProduct, freeProduct } = productInfo
	const mainLogo = isMobile ? [MBanner1, MBanner2] : [PcBanner1, PcBanner2]

	return (
		<>
			<S.MainBannerBox>
				<SSlideBanner
					Images={mainLogo}
					loop={true}
					isAuto={true}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					onClick={linkBannerPage}
				/>
			</S.MainBannerBox>
			<Container>
				{usedProduct.length + freeProduct.length !== 0 ? (
					<>
						{usedProduct.length !== 0 ? (
							<MaSection
								leftTitle={'우리동네 중고 상품'}
								link={linkSellList}
								products={usedProduct}
							/>
						) : (
							<EmptySection titleMessage={'우리동네에는 중고 상품이 없어요'} />
						)}
						<MaLineBanner
							link={linkRegister}
							subTitle={'집에 혼자있는 중고제품 팔면 돈이 된다?'}
							label={'판매하러 가기'}
							title={'수수료 없는 무료 중고거래, 나눔 사이트'}
							importText={' Paradise'}
							height={140}
						/>
						{freeProduct.length !== 0 ? (
							<MaSection
								leftTitle={'우리동네 나눔 상품'}
								link={linkShareList}
								products={freeProduct}
							/>
						) : (
							<EmptySection titleMessage={'우리동네에는 나눔 상품이 없어요'} />
						)}
					</>
				) : (
					<>
						<EmptySection titleMessage={'우리동네에는 올라온 상품이 없어요'} />
						<MaLineBanner
							link={linkRegister}
							subTitle={'집에 혼자있는 중고제품 팔면 돈이 된다?'}
							label={'판매하러 가기'}
							title={'수수료 없는 무료 중고거래, 나눔 사이트'}
							importText={' Paradise'}
							height={140}
						/>
					</>
				)}
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
	height: ${({ theme }) => (theme.isMobile ? '' : '500px')};
	cursor: pointer;
`
