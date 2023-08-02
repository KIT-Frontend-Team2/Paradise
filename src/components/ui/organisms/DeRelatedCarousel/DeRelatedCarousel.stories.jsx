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

const Template = args => <DeRelatedCarousel {...args} />

export const Controls = Template.bind({})

Controls.args = {
	product: [
		{
			idx: 302,
			title: '줍줍이',
			price: 123456,
			description: 'ㅇㄴㅇㄹ',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689514126212_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%C3%AC%C2%B5%C2%9C%C3%AC%C2%A2%C2%85.png',
			createdAt: '2023-07-16T13:28:46.000Z',
			liked: 1,
			likeCount: 2,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 976,
					Tag: {
						tag: '여성의류',
					},
				},
			],
		},
		{
			idx: 159,
			title: 'adsfa',
			price: 1234567,
			description: 'asdfasdf',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685722394449_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B55.png',
			createdAt: '2023-06-02T16:13:14.000Z',
			liked: 0,
			likeCount: 3,
			status: '판매완료',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 530,
					Tag: {
						tag: '가구·인테리어',
					},
				},
				{
					idx: 531,
					Tag: {
						tag: '여성잡화',
					},
				},
				{
					idx: 532,
					Tag: {
						tag: '여성의류',
					},
				},
			],
		},
		{
			idx: 155,
			title: 'asdfasdf',
			price: 123456,
			description: 'asdfadsf',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685720863741_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B54.png',
			createdAt: '2023-06-02T15:47:43.000Z',
			liked: 0,
			likeCount: 3,
			status: '판매완료',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 516,
					Tag: {
						tag: '가구·인테리어',
					},
				},
				{
					idx: 517,
					Tag: {
						tag: '스포츠·레저',
					},
				},
				{
					idx: 518,
					Tag: {
						tag: '여성잡화',
					},
				},
				{
					idx: 519,
					Tag: {
						tag: '여성의류',
					},
				},
			],
		},
	],
	pagination: {
		curPage: 1,
		startPage: 1,
		endPage: 1,
		totalPage: 1,
		count: 3,
		page_size: 20,
		totalSet: 1,
	},
}
