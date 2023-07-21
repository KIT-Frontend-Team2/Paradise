import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import cssToken from '../../../../styles/cssToken'
import Chart from '../../molecules/Chart/Chart'

const DeProductChartSection = ({
	category,
	chartData,
	margin,
	containerWidth,
}) => {
	return (
		<>
			<S.ChartTitle>
				<S.ProdcutCategory>{category}</S.ProdcutCategory> 상품의 최근 시세
			</S.ChartTitle>
			<Chart
				size={containerWidth}
				chartData={chartData}
				margin={margin}
			></Chart>
		</>
	)
}

export default DeProductChartSection

const S = {}

S.ChartTitle = styled.div`
	margin-top: 50px;
	font-size: ${cssToken.TEXT_SIZE['text-18']};
	font-weight: bold;
	margin-bottom: 18px;
`

S.ProdcutCategory = styled.span`
	color: #007679;
`

DeProductChartSection.propTypes = {
	/**
	 * 차트의 카테고리는 무엇인가요?
	 */
	category: PropTypes.string.isRequired,
	/**
	 * 차트의 데이터는 어떻게 할까요?
	 */
	chartData: PropTypes.object.isRequired,
	/**
	 * 차트의 여백은 어떻게 할까요?
	 */
	margin: PropTypes.object,
}
