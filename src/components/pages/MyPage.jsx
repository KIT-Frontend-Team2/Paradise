
import React from 'react'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import ProductMap from 'components/ui/molecules/Map/ProductMap'
import SearchMap from 'components/ui/molecules/Map/SearchMap'
import { AddressAtom } from 'atom/map/mapAtom'

const MyPage = props => {
	const formAddres2 = useRecoilValue(AddressAtom)

	return (
		<div>
			<ConTainer>
				<p>{formAddres2}</p>
				<ProductMap />
			</ConTainer>
			<br />
			<br />
			<br />
			<SearchMap />
		</div>
	)
}
export default MyPage

const ConTainer = styled.div`
	width: 300px;
	height: 384px;
`
