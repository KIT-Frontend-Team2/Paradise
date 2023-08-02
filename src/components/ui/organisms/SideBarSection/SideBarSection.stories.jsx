import SideBarSection from './SideBarSection'

export default {
	title: 'Organisms/SideBarSection',
	tags: ['autodocs'],
	component: SideBarSection,
	argTypes: {
		products: { control: 'array' },
	},
}

const Template = args => <SideBarSection products={args.products} />

export const Controls = Template.bind({})

Controls.args = {
	products: [
		{
			idx: 3761,
			Product: {
				idx: 310,
				title: '고양이 사진 팝니다',
				price: 100000000000000000,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
				status: '판매중',
				createdAt: '2023-08-02T00:11:05.000Z',
			},
		},
		{
			idx: 3762,
			Product: {
				idx: 310,
				title: '고양이 사진 팝니다',
				price: 100000000000000000,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
				status: '판매중',
				createdAt: '2023-08-02T00:11:05.000Z',
			},
		},
		{
			idx: 3753,
			Product: {
				idx: 302,
				title: '줍줍이',
				price: 123456,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689514126212_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%C3%AC%C2%B5%C2%9C%C3%AC%C2%A2%C2%85.png',
				status: '판매중',
				createdAt: '2023-07-16T13:28:46.000Z',
			},
		},
		{
			idx: 3754,
			Product: {
				idx: 302,
				title: '줍줍이',
				price: 123456,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689514126212_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%C3%AC%C2%B5%C2%9C%C3%AC%C2%A2%C2%85.png',
				status: '판매중',
				createdAt: '2023-07-16T13:28:46.000Z',
			},
		},
		{
			idx: 3746,
			Product: {
				idx: 299,
				title: '중고물품',
				price: 5000,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689430256437_0.jpg',
				status: '판매중',
				createdAt: '2023-07-15T14:10:56.000Z',
			},
		},
	],
}
