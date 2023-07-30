import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Container from '../../layout/Container'
import MSkeleton from '../../ui/atoms/Skeleton/MSkeleton'
import ProductListSkeletonTemplate from '../ProductListTemplate/ProductListSkeletonTemplate'

const MainPageTemplate = () => {
	return (
		<>
			<S.MainBannerBox>
				<MSkeleton height={510} variant={'rectangular'} />
			</S.MainBannerBox>
			<Container>
				<ProductListSkeletonTemplate />
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
