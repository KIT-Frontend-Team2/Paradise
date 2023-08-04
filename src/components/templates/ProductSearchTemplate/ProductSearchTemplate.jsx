import React from 'react'
import styled from 'styled-components'

import { EMPTY_MESSAGE } from '../../../consts/message'
import Container from '../../layout/Container'
import Pagination from '../../ui/molecules/Pagination/Pagination'
import EmptySection from '../../ui/organisms/EmptySection/EmptySection'
import ProductList from '../../ui/organisms/ProductList/ProductList'

const ProductSearchTemplate = ({ page, total, products, keyword }) => {
	const item_length = 30
	return (
		<Container>
			<>
				{products.length !== 0 ? (
					<>
						<S.ListTitle>
							<S.ListFilter>
								<S.OrangeColor>{keyword}</S.OrangeColor>
								{'의 검색결과 입니다.'}
							</S.ListFilter>
							<S.ProductCount>{'총 ' + total + '건'}</S.ProductCount>
						</S.ListTitle>
						<ProductList size={250} products={products} />
						<Pagination
							page={parseInt(page)}
							item_length={item_length}
							total={total}
						/>
					</>
				) : (
					<EmptySection titleMessage={EMPTY_MESSAGE.EMPTY_LIST} />
				)}
			</>
		</Container>
	)
}

export default ProductSearchTemplate
const S = {}

S.OrangeColor = styled.span`
	color: ${({ theme }) => theme.PALETTE.secondary};
`

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

S.NotFound = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 600px;

	div {
		margin-top: 20px;
		font-size: 24px;
		color: ${({ theme }) => theme.PALETTE.gray[900]};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	}
`
