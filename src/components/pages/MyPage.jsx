import ProductMap from 'components/ui/molecules/Map/ProductMap'
import SearchMap from 'components/ui/molecules/Map/SearchMap'
import React from 'react'
import styled from 'styled-components'


const MyPage = props => {
	return (
		<Wrrapper>
			<ConTainer>
				<ProductMap formAddress="서울시 강남구 역삼동 " />
			</ConTainer>
			<SearchMap />
		</Wrrapper>
	)
}
export default MyPage

const Wrrapper = styled.div`
	height: 1500px;
`

const ConTainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 800px;
	height: 300px;
	margin-bottom: 20px;
`