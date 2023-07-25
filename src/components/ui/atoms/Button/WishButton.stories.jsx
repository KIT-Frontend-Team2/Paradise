import WishButton from './WishButton'

export default {
	title: 'Atom/WishButton',
	tags: ['autodocs'],
	component: WishButton,
	decorators: [Story => <Story />],
	argTypes: {
		onClick: { action: '클릭' },
	},
}

export const 위시버튼 = {
	args: {
		variant: 'wish',
	},
}

export const 위시버튼_on = {
	args: {
		variant: 'wish-on',
	},
}
