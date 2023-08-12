import React from 'react'
import styled from 'styled-components'

import { HTTPError } from '../../../apis/HTTPError'
import { EMPTY_MESSAGE } from '../../../consts/message'
import Container from '../../layout/Container'
import Pagination from '../../ui/molecules/Pagination/Pagination'
import EmptySection from '../../ui/organisms/EmptySection/EmptySection'
import ProductList from '../../ui/organisms/ProductList/ProductList'

const ProductListTemplate = ({ pagination, products, title, intro }) => {
	const { count: total, curPage: page, page_size: item_length } = pagination

	if (page !== 1 && products.length === 0) {
		throw new HTTPError(400, '옳지않은 접근입니다.')
	}
	return (
		<Container>
			<>
				<S.ListTitle>
					<S.ListFilter>
						{title}
						{intro && <S.FilterIntro>{intro}</S.FilterIntro>}
					</S.ListFilter>
					<S.ProductCount>{'총 ' + total + '건'}</S.ProductCount>
				</S.ListTitle>
				{products.length !== 0 ? (
					<ProductList size={250} products={products} />
				) : (
					<EmptySection titleMessage={EMPTY_MESSAGE.EMPTY_LIST} />
				)}
				<Pagination page={page} item_length={item_length} total={total} />
			</>
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
	color: ${({ theme }) => theme.PALETTE.secondary};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: 24px;
`

S.ProductCount = styled.div`
	color: ${({ theme }) => theme.PALETTE.gray[700]};
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`

S.FilterIntro = styled.span`
	color: ${({ theme }) => theme.PALETTE.black};
`
