import React from 'react'
import styled from 'styled-components'

import { useDevice } from '../../../../hooks/mediaQuery/useDevice'
import ProductCard from '../../molecules/ProductCard/ProductCard'

const ProductList = ({ products, size }) => {
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
		repeat = 1
	}
	return (
		<S.Container repeat={repeat}>
			{products.map(product => (
				<ProductCard
					key={product.productId}
					price={product.productPrice}
					size={size}
					isLike={product.isLike}
					chat_count={product.product_chat_count}
					img_url={product.product_img}
					like={product.product_like}
					name={product.productTitle}
					id={product.productId}
					place={product.product_place}
					time={product.product_create_at}
					state={product.product_state}
					content={product.product_content}
				/>
			))}
		</S.Container>
	)
}

export default ProductList

const S = {}

S.Container = styled.div`
	margin: 50px 0 100px 0;
	display: grid;
	grid-template-columns: repeat(${({ repeat }) => repeat}, minmax(0, 1fr));
	justify-items: center;
	gap: 20px;
`
