import PropTypes from 'prop-types'
import React from 'react'

import DeSectionTitle from '../../molecules/DeSectionTitle/DeSectionTitle'
import SProductCarousel from '../../molecules/SProductCarousel/SProductCarousel'

const DeRelatedCarousel = ({ ...args }) => (
	<>
		<DeSectionTitle
			title={'연관된 상품'}
			rightTitle={args.products.length + '개의 상품'}
		/>
		<SProductCarousel products={args.products} />
	</>
)

export default DeRelatedCarousel

SProductCarousel.propTypes = {
	/**
	 * 슬라이드에 들어갈 Product 카드 내의 정보들에 대한 배열입니다.
	 */
	products: PropTypes.array.isRequired,
}
