import React from 'react'
import styled from 'styled-components'

import { useDevice } from '../../../../hooks/mediaQuery/useDevice'
import MSkeleton from '../../atoms/Skeleton/MSkeleton'

const ProductList = ({ size }) => {
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

	let SkeletonArray = new Array(8).fill('').map((v, i) => i)
	return (
		<S.Container repeat={repeat}>
			{SkeletonArray.map(() => (
				<MSkeleton
					key={Math.floor(Math.random() * 10000)}
					width={size}
					height={357}
					variant={'rectangular'}
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
