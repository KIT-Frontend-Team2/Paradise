import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import DeImgSection from './DeImgSection'

export default {
	title: 'Organisms/DeImgSection',
	tags: ['autodocs'],
	component: DeImgSection,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		itemData: { control: { type: 'object' } },
	},
}

const Template = args => <DeImgSection itemData={args.itemData} />

export const Controls = Template.bind({})

Controls.args = {
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
	],
}
