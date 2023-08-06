import DeProductCategoryTag from './DeProductCategoryTag'

export default {
	title: 'Organisms/DeProductCategoryTag',
	tags: ['autodocs'],
	component: DeProductCategoryTag,
	argTypes: {
		category: { control: 'object' },
	},
}

const Template = args => <DeProductCategoryTag category={args.category} />

export const Controls = Template.bind({})

Controls.args = {
	category: [
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
}
