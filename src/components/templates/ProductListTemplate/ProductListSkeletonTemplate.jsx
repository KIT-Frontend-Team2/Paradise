import React from 'react'
import styled from 'styled-components'

import Container from '../../layout/Container'
import MSkeleton from '../../ui/atoms/Skeleton/MSkeleton'
import ProductListSkeleton from '../../ui/organisms/ProductList/ProductListSkeleton'

const ProductListSkeletonTemplate = () => {
	return (
		<Container>
			<S.ListTitle>
				<S.ListFilter>
					<MSkeleton width={200} height={24} variant={'rectangular'} />
				</S.ListFilter>
				<S.ProductCount>
					<MSkeleton width={100} height={14} variant={'rectangular'} />
				</S.ProductCount>
			</S.ListTitle>
			<ProductListSkeleton size={250} />
		</Container>
	)
}

export default ProductListSkeletonTemplate

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
