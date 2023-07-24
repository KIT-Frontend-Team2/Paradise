import React from 'react'
import styled from 'styled-components'

import Container from '../../layout/Container'
import Pagination from '../../ui/molecules/Pagination/Pagination'
import ProductList from '../../ui/organisms/ProductList/ProductList'

const ProductListTemplate = ({ page, total, filter, products }) => {
	let title = ''
	const item_length = 30
	switch (filter) {
		case 'sell':
			title = '판매 상품'
			break
		case 'free':
			title = '나눔 상품'
			break
		case 'all':
			title = '상품 목록'
			break
		default:
			throw new Error('옳지 않은 접근입니다.')
	}
	return (
		<Container>
			<S.ListTitle>
				<S.ListFilter>{title}</S.ListFilter>
				<S.ProductCount>{'총 ' + total + '건'}</S.ProductCount>
			</S.ListTitle>
			<ProductList size={250} products={products} />
			<Pagination
				page={parseInt(page)}
				item_length={item_length}
				total={total}
			/>
		</Container>
	)
}

export default ProductListTemplate

const S = {}

S.ListTitle = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 56px;
`

S.ListFilter = styled.div`
	color: ${({ theme }) => theme.PALETTE.black};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: 24px;
`

S.ProductCount = styled.div`
	color: ${({ theme }) => theme.PALETTE.gray[700]};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`
