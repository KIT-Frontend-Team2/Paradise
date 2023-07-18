import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import DeImageList from './DeImageList'

export default {
	title: 'Molecules/DeImageList',
	tags: ['autodocs'],
	component: DeImageList,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		width: { control: { type: 'number' } },
		height: { control: { type: 'number' } },
		cols: { control: { type: 'number' } },
		rowHeight: { control: { type: 'number' } },
	},
}

const Template = args => (
	<DeImageList
		width={args.width}
		height={args.height}
		cols={args.cols}
		rowHeight={args.rowHeight}
		itemData={args.itemData}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	width: 541,
	height: 355,
	cols: 3,
	rowHeight: 169,
	itemData: [
		{
			id: '120',
			img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbrvjmx%2FbtrQfeNBD8C%2FPulqvzCWn30z0ssA5CL0vk%2Fimg.jpg', // 상품의 대표 이미지 주소
		},
		{
			id: '50',
			img: 'https://media.bunjang.co.kr/product/229927983_1_1689321636_w292.jpg',
		},
		{
			id: '44',
			img: 'https://media.bunjang.co.kr/product/229927983_1_1689321636_w292.jpg',
		},
		{
			id: '145',
			img: 'https://media.bunjang.co.kr/product/192869261_1_1685019943_w292.jpg',
		},
		{
			id: '5124',
			img: 'https://media.bunjang.co.kr/product/226840555_1_1686560346_w292.jpg',
		},
		{
			id: '2231',
			img: 'https://media.bunjang.co.kr/product/226840555_1_1686560346_w292.jpg',
		},
	],
}
