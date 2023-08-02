import MaSection from './MaSection'

export default {
	title: 'Organisms/MaSection',
	tags: ['autodocs'],
	component: MaSection,
	argTypes: {
		products: { control: 'array' },
		leftTitle: { control: 'text' },
		link: { action: '클릭' },
	},
}

const Template = args => (
	<MaSection
		products={args.products}
		leftTitle={args.leftTitle}
		link={args.link}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	leftTitle: '우리 동네 중고 상품',
	products: [
		{
			idx: 310,
			title: '고양이 사진 팝니다',
			price: 100000000000000000,
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
			createdAt: '2023-08-02T00:11:05.000Z',
			liked: 1,
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
					idx: 989,
					Tag: {
						tag: '사진',
					},
				},
				{
					idx: 988,
					Tag: {
						tag: '고양이',
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
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689514126212_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%C3%AC%C2%B5%C2%9C%C3%AC%C2%A2%C2%85.png',
			createdAt: '2023-07-16T13:28:46.000Z',
			liked: 1,
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
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689430256437_0.jpg',
			createdAt: '2023-07-15T14:10:56.000Z',
			liked: 1,
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
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686578023419_KakaoTalk_20221205_173140689_07.jpg',
			createdAt: '2023-06-12T13:53:43.000Z',
			liked: 0,
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
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686399909558_20230603_183457.jpg',
			createdAt: '2023-06-10T12:25:27.000Z',
			liked: 1,
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
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686202946368_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B52.jpeg',
			createdAt: '2023-06-08T05:42:26.000Z',
			liked: 1,
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
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686148574893_33333455_376457432874896_1473856510529372160_n-5b17d7221d640400362604e9.jpg',
			createdAt: '2023-06-07T14:36:15.000Z',
			liked: 1,
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
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686146471285_testImage5.jpg',
			createdAt: '2023-06-07T14:01:11.000Z',
			liked: 1,
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
	],
	link: () => console.log('action'),
}
