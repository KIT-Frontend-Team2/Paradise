import Chart from './Chart'

export default {
	title: 'Molecules/Chart',
	tags: ['autodocs'],
	component: Chart,
}

const Template = args => (
	<Chart size={args.size} chartData={args.chartData} margin={args.margin} />
)

export const Controls = Template.bind({})

Controls.args = {
	size: 600,
	chartData: {
		data: [
			{
				name: '5월',
				value: 600000,
			},
			{
				name: '6월',
				value: 300000,
			},
			{
				name: '7월',
				value: 500000,
			},
			{
				name: '최근',
				value: 600000,
			},
		],
		x: 'name',
		y: 'value',
		formatter: y => `${y / 10000}만원`,
	},
	margin: {
		top: 5,
		right: 5,
		bottom: 20,
		left: 20,
	},
}
