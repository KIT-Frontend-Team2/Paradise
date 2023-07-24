import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import DeProductChartSection from './DeProductChartSection'

export default {
	title: 'Organisms/DeProductChartSection',
	tags: ['autodocs'],
	component: DeProductChartSection,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

const Template = args => (
	<DeProductChartSection
		containerWidth={args.containerWidth}
		chartData={args.chartData}
		size={args.size}
		margin={args.margin}
		category={args.category}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	containerWidth: 600,
	category: '의류 / 신발',
	chartData: {
		data: [
			{
				name: '5월',
				value: 700000,
			},
			{
				name: '6월',
				value: 300000,
			},
			{
				name: '7월',
				value: 900000,
			},
			{
				name: '최근',
				value: 600000,
			},
		],
		x: 'name',
		y: 'value',
		formatter: y => {
			if (y === 0) return 0
			return `${y / 10000}만원`
		},
	},
	margin: {
		top: 5,
		right: 5,
		bottom: 20,
		left: 20,
	},
}
