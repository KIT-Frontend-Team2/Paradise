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
		'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
		'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065031_1652337370806_0.jpg',
		'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065046_AdobeStock_480677190-1024x684%20-%20%C3%AB%C2%B3%C2%B5%C3%AC%C2%82%C2%AC%C3%AB%C2%B3%C2%B8.jpeg',
		'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065051_Cute_Kitten_Eyes-Animal_HD_Wallpaper_2560x1600.jpg',
		'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065103_ezgif.com-gif-maker-4.gif',
	],
}
