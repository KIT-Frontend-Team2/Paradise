// import ProductMap from 'components/ui/molecules/Map/ProductMap'
import ProductMap from 'components/ui/molecules/Map/ProductMap'
import SearchMap from 'components/ui/molecules/Map/SearchMap'
import React from 'react'
import styled from 'styled-components'

const MyPage = props => {
	return (
		<div>
			<ConTainer>
				<ProductMap formAddress="서울시 강남구 역삼동" />
			</ConTainer>
			<SearchMap />
		</div>
	)
}
export default MyPage

const ConTainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: auto; // 지도의 내용에 따라 높이가 유동적으로 변하도록 수정
	margin-bottom: 20px; // 각 지도 컨테이너 사이에 여백 추가;
`
