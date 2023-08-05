import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import ProductList from '../ProductList/ProductList'

const MaSection = ({ leftTitle, link, products }) => {
	return (
		<>
			<S.Title>
				<S.LeftTitle>{leftTitle}</S.LeftTitle>
				<S.RightLink onClick={link}>더보기</S.RightLink>
			</S.Title>
			<ProductList products={products} size={250} />
		</>
	)
}

export default MaSection

MaSection.propTypes = {
	/**
	 * 보여질 타이틀을 넣어주세요
	 */
	leftTitle: PropTypes.string.isRequired,
	/**
	 * 보여줄 상품 리스트를 넣어주세요
	 */
	products: PropTypes.array.isRequired,
	/**
	 * 페이지 이동의 함수를 넣어주세요
	 */
	link: PropTypes.func.isRequired,
}

const S = {}

S.Title = styled.div`
	padding-top: 105px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`

S.LeftTitle = styled.div`
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: 38px;
	color: ${({ theme }) => theme.PALETTE.black};
`
S.RightLink = styled.div`
	cursor: pointer;
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`
