import DeImgSection from './DeImgSection'

export default {
	title: 'Organisms/DeImgSection',
	tags: ['autodocs'],
	component: DeImgSection,
	argTypes: {
		itemData: { control: { type: 'object' } },
	},
}

const Template = args => <DeImgSection itemData={args.itemData} />

export const Controls = Template.bind({})

Controls.args = {
	itemData: [
		{
			id: '1',
			img_url:
				'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
		},
		{
			id: '2',
			img_url:
				'https://media.bunjang.co.kr/product/215187391_2_1676610122_w856.jpg',
		},
		{
			id: '3',
			img_url:
				'https://media.bunjang.co.kr/product/215187391_3_1676610122_w856.jpg',
		},
		{
			id: '4',
			img_url:
				'https://media.bunjang.co.kr/product/215187391_4_1676610122_w856.jpg',
		},
		{
			id: '5',
			img_url:
				'https://media.bunjang.co.kr/product/215187391_5_1676610122_w856.jpg',
		},
	],
}
