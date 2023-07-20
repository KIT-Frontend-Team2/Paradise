import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import DeUserProductSection from './DeUserProductSection'

export default {
	title: 'Organisms/DeUserProductSection',
	tags: ['autodocs'],
	component: DeUserProductSection,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		imgProfile: { control: 'text' },
		productCount: { control: { type: 'number' } },
		userTemplate: { control: { type: 'number' } },
		username: { control: 'text' },
		itemData: { control: 'object' },
	},
}

const Template = args => (
	<DeUserProductSection
		imgProfile={args.imgProfile}
		userTemplate={args.userTemplate}
		itemData={args.itemData}
		productCount={args.productCount}
		userName={args.userName}
		userId={args.userId}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	imgProfile:
		'https://wimg.mk.co.kr/news/cms/202305/02/news-p.v1.20230502.ed525ea29d424555a1bffdeefca035d1_P1.jpg',
	userName: '네이쳐',
	productCount: 41,
	userTemplate: 39.2,
	userId: 'uudi4',
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
