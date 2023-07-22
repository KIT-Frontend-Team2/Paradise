import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import ProductCard from './ProductCard'

export default {
	title: 'Molecules/ProductCard',
	tags: ['autodocs'],
	component: ProductCard,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		size: { control: { type: 'number' } },
		id: { control: 'text' },
		name: { control: 'text' },
		place: { control: 'text' },
		time: { control: 'date' },
		img_url: { control: 'text' },
		content: { control: 'text' },
		isLike: { control: { type: 'boolean' } },
		price: { control: { type: 'number' } },
		like: { control: { type: 'number' } },
		chat_count: { control: { type: 'number' } },
		state: {
			control: {
				type: 'select',
			},
			options: ['판매중', '판매완료'],
		},
	},
}

const Template = args => (
	<ProductCard
		size={args.size}
		price={args.price}
		time={args.time}
		like={args.like}
		name={args.name}
		img_url={args.img_url}
		content={args.content}
		isLike={args.isLike}
		id={args.id}
		chat_count={args.chat_count}
		place={args.place}
		state={args.state}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	size: 200,
	id: '3asd4',
	state: '판매중',
	name: '스타벅스 기프티콘',
	content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
	place: '천호동',
	time: '2023-04-14T13:59:49.690Z',
	price: 25000,
	like: 15,
	img_url:
		'https://media.bunjang.co.kr/product/199955867_1_1663813277_w856.jpg',
	isLike: false,
	chat_count: 3,
}
