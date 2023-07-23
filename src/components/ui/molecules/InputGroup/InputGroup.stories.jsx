import InputGroup from './InputGroup'

export default {
	title: 'Molecules/InputGroup',
	tags: ['autodocs'],
	component: InputGroup,
	decorators: [Story => <Story />],
}

export const flex = {
	args: {
		display: 'flex',
	},
}

export const inline_flex = {
	args: {
		display: 'inline-flex',
	},
}
