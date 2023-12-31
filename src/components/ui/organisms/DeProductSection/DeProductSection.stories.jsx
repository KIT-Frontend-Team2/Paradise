import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import DeProductSection from './DeProductSection'

export default {
	title: 'Organisms/DeProductSection',
	tags: ['autodocs'],
	component: DeProductSection,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		title: { control: 'text' },
		chatCount: { control: { type: 'number' } },
		like: { control: { type: 'number' } },
		productInfo: { control: 'text' },
		time: { control: 'date' },
		isBuyer: { control: { type: 'boolean' } },
		isLike: { control: { type: 'boolean' } },
		state: {
			control: {
				type: 'select',
			},
			options: ['판매중', '판매완료'],
		},
	},
}

const Template = args => (
	<DeProductSection
		id={args.id}
		title={args.title}
		chatCount={args.chatCount}
		like={args.like}
		productInfo={args.productInfo}
		time={args.time}
		price={args.price}
		isBuyer={args.isBuyer}
		isLike={args.isLike}
		state={args.state}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	id: '32',
	title: '바오바오 (링숄더백)',
	isBuyer: false,
	chatCount: 2,
	like: 40,
	state: '판매중',
	isLike: true,
	productInfo: `카카오톡 이모티콘에서 산게아닌 직접 수작업으로 만든 아주 예쁜 아이콘입니다.
        아무데서나 구할 수 없습니다.   단돈 1,500,000에 모십니다.   되게 싸게파는거 아니냐고 사기 아니냐고 하실수도 있는데 사기 그런거 모르는
    초등학생입니다.  믿고 거래하실분 찾습니다!`,
	time: '2023-07-12T07:12:01.656Z',
	price: 115000,
}
