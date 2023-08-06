import defaultImg from 'assets/images/기본프로필/default_profile_4.png'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import cssToken from '../../../../styles/cssToken'
import Chart from '../../molecules/Chart/Chart'

const DeProductChartSection = ({
	isChart,
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
			{isChart ? (
				<Chart
					size={containerWidth}
					chartData={chartData}
					margin={margin}
				></Chart>
			) : (
				<S.DefaultChartImg>
					<div>
						<img src={defaultImg} alt={'해당 카테고리의 상품이 없습니다.'} />
					</div>
					"해당 상품의 구매내역이 존재하지 않습니다."
				</S.DefaultChartImg>
			)}
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

S.DefaultChartImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
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
	/**
	 * 차트를 감싸는 컴포넌트
	 */
	containerWidth: PropTypes.number.isRequired,
}
