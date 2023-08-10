import { number } from 'prop-types'

import ProductList from './ProductList'

export default {
	title: 'Organisms/ProductList',
	tags: ['autodocs'],
	component: ProductList,
	argTypes: {
		products: { control: 'array' },
		size: { control: number },
	},
}

const Template = args => <ProductList {...args} />

export const Controls = Template.bind({})

Controls.args = {
	products: [
		{
			idx: 310,
			title: '고양이 사진 팝니다',
			price: 100000000000000000,
			description: '고양이 사진 팝니다 사기 아니에요 ',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
			createdAt: '2023-08-02T00:11:05.000Z',
			liked: 1,
			likeCount: 1,
			status: '판매중',
			ProductImages: [
				{
					imgUrl:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065031_1652337370806_0.jpg',
				},
				{
					imgUrl:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065046_AdobeStock_480677190-1024x684%20-%20%C3%AB%C2%B3%C2%B5%C3%AC%C2%82%C2%AC%C3%AB%C2%B3%C2%B8.jpeg',
				},
				{
					imgUrl:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065051_Cute_Kitten_Eyes-Animal_HD_Wallpaper_2560x1600.jpg',
				},
				{
					imgUrl:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065103_ezgif.com-gif-maker-4.gif',
				},
			],
			ProductsTags: [
				{
					idx: 988,
					Tag: {
						tag: '고양이',
					},
				},
				{
					idx: 989,
					Tag: {
						tag: '사진',
					},
				},
				{
					idx: 990,
					Tag: {
						tag: '무료나눔?',
					},
				},
			],
		},
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
			idx: 299,
			title: '중고물품',
			price: 5000,
			description: '판매합니다.',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689430256437_0.jpg',
			createdAt: '2023-07-15T14:10:56.000Z',
			liked: 1,
			likeCount: 2,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 966,
					Tag: {
						tag: '게임·취미',
					},
				},
			],
		},
		{
			idx: 292,
			title: 'ㅇㅎ',
			price: 11111111,
			description: '테스트',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686578023419_KakaoTalk_20221205_173140689_07.jpg',
			createdAt: '2023-06-12T13:53:43.000Z',
			liked: 0,
			likeCount: 3,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 948,
					Tag: {
						tag: '테스트',
					},
				},
			],
		},
		{
			idx: 289,
			title: '테스트2222',
			price: 1000,
			description: '123',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686399909558_20230603_183457.jpg',
			createdAt: '2023-06-10T12:25:27.000Z',
			liked: 1,
			likeCount: 3,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 960,
					Tag: {
						tag: '유아동',
					},
				},
			],
		},
		{
			idx: 283,
			title: 'test',
			price: 1234,
			description: 'asdfa',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686202946368_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B52.jpeg',
			createdAt: '2023-06-08T05:42:26.000Z',
			liked: 1,
			likeCount: 5,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 935,
					Tag: {
						tag: 'test',
					},
				},
			],
		},
		{
			idx: 282,
			title: '도리도리',
			price: 666666,
			description: '도리도리 테스트',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686148574893_33333455_376457432874896_1473856510529372160_n-5b17d7221d640400362604e9.jpg',
			createdAt: '2023-06-07T14:36:15.000Z',
			liked: 1,
			likeCount: 6,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 930,
					Tag: {
						tag: '테스트',
					},
				},
			],
		},
		{
			idx: 279,
			title: '상품 상품',
			price: 3000,
			description: '상품 상품',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686146471285_testImage5.jpg',
			createdAt: '2023-06-07T14:01:11.000Z',
			liked: 1,
			likeCount: 4,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 918,
					Tag: {
						tag: '상품',
					},
				},
			],
		},
		{
			idx: 258,
			title: 'ㄷㄱㄹ',
			price: 1222,
			description: 'ㅁㄴㅇㄹ',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685984662580_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B54.png',
			createdAt: '2023-06-05T17:04:22.000Z',
			liked: 1,
			likeCount: 6,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 861,
					Tag: {
						tag: 'ㅁㄴㅇㄹ',
					},
				},
			],
		},
		{
			idx: 257,
			title: 'ㅁㅇㄴㄹ',
			price: 12141,
			description: 'ㅁㄴㅇㄹㅁㅇㄴ',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685980742544_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B56.png',
			createdAt: '2023-06-05T15:59:02.000Z',
			liked: 1,
			likeCount: 6,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 855,
					Tag: {
						tag: 'ㅁㅇㄴㄹ',
					},
				},
			],
		},
		{
			idx: 256,
			title: 'ㅁㅇㄹ',
			price: 134,
			description: 'ㅁㄴㅇㄹ',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685979791198_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B53.png',
			createdAt: '2023-06-05T15:43:11.000Z',
			liked: 0,
			likeCount: 3,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 854,
					Tag: {
						tag: 'asdf',
					},
				},
			],
		},
		{
			idx: 253,
			title: '312',
			price: 31203,
			description: '312',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686046279831_7576de8e-e4f6-4827-9f17-cfefe4be052f.jpg',
			createdAt: '2023-06-05T12:22:30.000Z',
			liked: 0,
			likeCount: 1,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 898,
					Tag: {
						tag: '321321',
					},
				},
			],
		},
		{
			idx: 248,
			title: 'asdfasdadfa',
			price: 123,
			description: 'adsfadfadf',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685912892599_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B52.jpeg',
			createdAt: '2023-06-04T21:08:12.000Z',
			liked: 0,
			likeCount: 2,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 702,
					Tag: {
						tag: 'adfas',
					},
				},
			],
		},
		{
			idx: 167,
			title: '송편 500g 팝니다',
			price: 7000,
			description: '가계부 테스트입니다',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685770848459_%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BA%202023-05-30%20%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%AB%2010.57.24.png',
			createdAt: '2023-06-03T05:40:48.000Z',
			liked: 0,
			likeCount: 3,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 543,
					Tag: {
						tag: '떡',
					},
				},
				{
					idx: 544,
					Tag: {
						tag: '간식',
					},
				},
			],
		},
		{
			idx: 136,
			title: '물건1',
			price: 1000,
			description: '테스트',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685671715864_%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BA%202023-05-30%20%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9%C3%A1%C2%84%C2%8C%C3%A1%C2%85%C2%A5%C3%A1%C2%86%C2%AB%2010.55.30.png',
			createdAt: '2023-06-02T02:08:36.000Z',
			liked: 0,
			likeCount: 2,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 475,
					Tag: {
						tag: '테스트',
					},
				},
			],
		},
		{
			idx: 95,
			title: 'asdfa',
			price: 54221,
			description: 'asdfsdfa',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685534717667_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B55.png',
			createdAt: '2023-05-31T12:05:17.000Z',
			liked: 1,
			likeCount: 2,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 261,
					Tag: {
						tag: 'daf',
					},
				},
			],
		},
		{
			idx: 92,
			title: 'dafagsh',
			price: 65432,
			description: 'asdfㅇ',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685534491336_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B52.jpeg',
			createdAt: '2023-05-31T12:01:31.000Z',
			liked: 0,
			likeCount: 0,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 856,
					Tag: {
						tag: '여성잡화',
					},
				},
				{
					idx: 857,
					Tag: {
						tag: '스포츠/레저',
					},
				},
			],
		},
		{
			idx: 85,
			title: 'adsfsdd',
			price: 244323,
			description: 'asdf',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685533304021_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B51.jpeg',
			createdAt: '2023-05-31T11:41:44.000Z',
			liked: 0,
			likeCount: 0,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 866,
					Tag: {
						tag: '뷰티/미용',
					},
				},
				{
					idx: 867,
					Tag: {
						tag: '도서/티켓/음반',
					},
				},
				{
					idx: 868,
					Tag: {
						tag: '여성잡화',
					},
				},
				{
					idx: 869,
					Tag: {
						tag: 'ㄹㄹ',
					},
				},
				{
					idx: 870,
					Tag: {
						tag: 'ㄴ',
					},
				},
			],
		},
		{
			idx: 84,
			title: 'dfasdfa3311',
			price: 123,
			description: 'asdfadsf',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685533057368_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B57.png',
			createdAt: '2023-05-31T11:37:37.000Z',
			liked: 0,
			likeCount: 0,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 394,
					Tag: {
						tag: '디지털기기',
					},
				},
			],
		},
		{
			idx: 82,
			title: 'a',
			price: 234234,
			description: 'asdfadfdf',
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685532996983_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B54.png',
			createdAt: '2023-05-31T11:36:37.000Z',
			liked: 0,
			likeCount: 0,
			status: '판매중',
			ProductImages: [],
			ProductsTags: [
				{
					idx: 847,
					Tag: {
						tag: 'd',
					},
				},
				{
					idx: 848,
					Tag: {
						tag: '생활·주방가전',
					},
				},
			],
		},
	],
	pagination: {
		curPage: 1,
		startPage: 1,
		endPage: 2,
		totalPage: 2,
		count: 22,
		page_size: 20,
		totalSet: 1,
	},
}
