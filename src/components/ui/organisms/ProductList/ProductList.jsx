import React from 'react'
import styled from 'styled-components'

import { useDevice } from '../../../../hooks/mediaQuery/useDevice'
import ProductCard from '../../molecules/ProductCard/ProductCard'

const ProductList = ({ products }) => {
	const {
		isDesktop,
		isTabletAndLaptop,
		isTablet,
		isMobileAndTablet,
		isMobile,
	} = useDevice()
	let repeat = 4
	if (isDesktop || isTabletAndLaptop) {
		repeat = 4
	}
	if (isTablet) {
		repeat = 3
	}
	if (isMobileAndTablet) {
		repeat = 2
	}

	if (isMobile) {
		repeat = 2
	}
	const region = '서울시 강남구 역삼동'

	return (
		<S.Container repeat={repeat}>
			{products.map(product => {
				return (
					<ProductCard
						key={product.idx}
						price={product.price}
						isLike={!!product.liked}
						chat_count={product.product_chat_count}
						img_url={product.img_url}
						like={product.product_like_count || 0}
						name={product.title}
						id={product.idx}
						place={region}
						time={product.createdAt}
						state={product.status}
						content={product.product_content}
					/>
				)
			})}
		</S.Container>
	)
}

export default ProductList

const S = {}

S.Container = styled.div`
	margin: 50px 0 50px 0;
	display: grid;
	grid-template-columns: repeat(${({ repeat }) => repeat}, minmax(0, 1fr));
	justify-items: center;
	gap: 20px;
`
