import ProductMap from 'components/ui/molecules/Map/ProductMap'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// import MSkeleton from '../../atoms/Skeleton/MSkeleton'
import DeSectionTitle from '../../molecules/DeSectionTitle/DeSectionTitle'

/**
 * @Todo 카카오 맵을 넣어야합니다.
 */
const DeProductMapSection = ({ rightTitle }) => (
	<>
		<DeSectionTitle title={'희망 거래 장소'} rightTitle={rightTitle} />
		<S.Container>
			<ProductMap formAddress={rightTitle} />
		</S.Container>
	</>
)

export default DeProductMapSection

DeProductMapSection.propTypes = {
	/**
	 * 주소를 넣어주세요
	 */
	rightTitle: PropTypes.string.isRequired,
}

const S = {}

S.Container = styled.div`
	height: 300px;
`
