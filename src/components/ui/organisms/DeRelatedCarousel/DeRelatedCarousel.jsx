import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { EMPTY_MESSAGE } from '../../../../consts/message'
import DeSectionTitle from '../../molecules/DeSectionTitle/DeSectionTitle'
import SProductCarousel from '../../molecules/SProductCarousel/SProductCarousel'
import EmptySection from '../EmptySection/EmptySection'

const DeRelatedCarousel = ({ product }) => {
	const productLength = product.length
	return (
		<>
			{productLength !== 0 ? (
				<>
					<DeSectionTitle
						title={'연관된 상품'}
						rightTitle={product.length + '개의 상품'}
					/>
					<SProductCarousel products={product} />
				</>
			) : (
				<EmptySection size={300} titleMessage={EMPTY_MESSAGE.EMPTY_RELATED} />
			)}
		</>
	)
}

export default DeRelatedCarousel

const S = {}

S.AltRealtedCarousel = styled.div``

SProductCarousel.propTypes = {
	/**
	 * 슬라이드에 들어갈 Product 카드 내의 정보들에 대한 배열입니다.
	 */
	products: PropTypes.array.isRequired,
}
