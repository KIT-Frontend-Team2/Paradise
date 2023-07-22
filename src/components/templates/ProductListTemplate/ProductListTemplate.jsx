import React from 'react'
import styled from 'styled-components'

import Pagination from '../../ui/molecules/Pagination/Pagination'

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
		<S.Wrapper>
			<S.Container>
				<S.ListTitle>
					<S.ListFilter>{title}</S.ListFilter>
					<S.ProductCount>{'총 ' + total + '건'}</S.ProductCount>
				</S.ListTitle>
				<Pagination
					page={parseInt(page)}
					item_length={item_length}
					total={total}
				/>
			</S.Container>
		</S.Wrapper>
	)
}

export default ProductListTemplate

const S = {}

S.Wrapper = styled.div`
	width: 100%;
	height: auto;
`
S.Container = styled.div`
	max-width: 1100px;
	width: ${({ deskTop }) => (deskTop ? 90 : 100)}%;
	margin: 0 auto;
`

S.ListTitle = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 56px;
`

S.ListFilter = styled.div``

S.ProductCount = styled.div`
	color: ${({ theme }) => theme.PALETTE.gray[700]};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`
