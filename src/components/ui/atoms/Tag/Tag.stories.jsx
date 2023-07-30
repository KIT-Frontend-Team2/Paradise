import Tag from './Tag'

export default {
	title: 'Atom/Tag',
	tags: ['autodocs'],
	component: Tag,
	decorators: [Story => <Story />],
}

export const 기본_태그 = {
	args: {
		label: '판매',
	},
}
