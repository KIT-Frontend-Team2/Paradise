import PropTypes from 'prop-types'
import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const Chart = ({ size, chartData, margin }) => (
	<LineChart
		width={size}
		height={size * 0.6}
		data={chartData.data}
		margin={margin}
	>
		<Line type="monotone" dataKey={chartData.y} stroke="#007679" />
		<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
		<XAxis tickLine={false} dataKey={chartData.x} />
		<YAxis tickLine={false} tickFormatter={chartData.formatter} />
		<Tooltip
			formatter={(value, name) =>
				name === '평균가' && value > 10000
					? `${Math.round(value / 10000, 2)}만원`
					: `${value}원`
			}
		/>
	</LineChart>
)

export default Chart

Chart.propTypes = {
	/**
	 * 차트의 사이즈는 어떻게 할까요?
	 */
	size: PropTypes.number,
	/**
	 * 차트의 데이터는 어떻게 할까요?
	 */
	chartData: PropTypes.object.isRequired,
	/**
	 * 차트의 여백은 어떻게 할까요?
	 */
	margin: PropTypes.object,
}
