import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import DeRelatedCarousel from './DeRelatedCarousel'

export default {
	title: 'Organisms/DeRelatedCarousel',
	tags: ['autodocs'],
	component: DeRelatedCarousel,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {},
}

const Template = args => <DeRelatedCarousel products={args.products} />

export const Controls = Template.bind({})

Controls.args = {
	products: [
		{
			product_id: 270,
			product_name: '스타벅스 아메리카노 기프티콘',
			product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
			product_price: 15000,
			product_place: '천호동',
			product_create_at: '2023-04-14T13:59:49.690Z',
			product_update_at: '2023-04-14T13:59:49.690Z',
			product_main_img_url:
				'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg',
			product_like: 10,
			product_chat_count: 21,
			isLike: false,
		},
		{
			product_id: 420,
			product_name: '스타벅스 아메리카노 기프티콘',
			product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
			product_price: 15000,
			product_place: '천호동',
			product_create_at: '2023-04-14T13:59:49.690Z',
			product_update_at: '2023-04-14T13:59:49.690Z',
			product_main_img_url:
				'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg',
			product_like: 10,
			product_chat_count: 21,
			isLike: false,
		},
		{
			product_id: 520,
			product_name: '스타벅스 아메리카노 기프티콘',
			product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
			product_price: 15000,
			product_place: '천호동',
			product_create_at: '2023-04-14T13:59:49.690Z',
			product_update_at: '2023-04-14T13:59:49.690Z',
			product_main_img_url:
				'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg',
			product_like: 10,
			product_chat_count: 21,
			isLike: false,
		},
		{
			product_id: 18,
			product_name: '스타벅스 아메리카노 기프티콘',
			product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
			product_price: 15000,
			product_place: '천호동',
			product_create_at: '2023-04-14T13:59:49.690Z',
			product_update_at: '2023-04-14T13:59:49.690Z',
			product_main_img_url:
				'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg',
			product_like: 10,
			product_chat_count: 21,
			isLike: true,
		},
		{
			product_id: 25,
			product_name: '스타벅스 아메리카노 기프티콘',
			product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
			product_price: 15000,
			product_place: '천호동',
			product_create_at: '2023-04-14T13:59:49.690Z',
			product_update_at: '2023-04-14T13:59:49.690Z',
			product_main_img_url:
				'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg',
			product_like: 10,
			product_chat_count: 21,
			isLike: false,
		},
		{
			product_id: 11,
			product_name: '스타벅스 아메리카노 기프티콘',
			product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
			product_price: 15000,
			product_place: '천호동',
			product_create_at: '2023-04-14T13:59:49.690Z',
			product_update_at: '2023-04-14T13:59:49.690Z',
			product_main_img_url:
				'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg',
			product_like: 10,
			product_chat_count: 21,
			isLike: false,
		},
		{
			product_id: 41,
			product_name: '스타벅스 아메리카노 기프티콘',
			product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
			product_price: 15000,
			product_place: '천호동',
			product_create_at: '2023-04-14T13:59:49.690Z',
			product_update_at: '2023-04-14T13:59:49.690Z',
			product_main_img_url:
				'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg',
			product_like: 10,
			product_chat_count: 21,
			isLike: false,
		},
	],
}
