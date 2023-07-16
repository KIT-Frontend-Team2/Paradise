import MSkeleton from './MSkeleton'

export default {
	title: 'Atom/MSkeleton',
	tags: ['autodocs'],
	component: MSkeleton,
	argTypes: {
		variant: {
			control: {
				type: 'select',
			},
			options: ['text', 'circular', 'rectangular', 'rounded'],
		},
		width: { control: { type: 'number' } },
		height: { control: { type: 'number' } },
		animation: {
			control: {
				type: 'select',
			},
			options: [false, 'wave', undefined],
		},
	},
}

export const 텍스트 = {
	args: {
		variant: 'text',
		width: 200,
		height: 50,
	},
}

export const 원형 = {
	args: {
		variant: 'circular',
		width: 100,
		height: 100,
	},
}

export const 직사각형 = {
	args: {
		variant: 'rectangular',
		width: 200,
		height: 50,
	},
}

export const 둥근모서리 = {
	args: {
		variant: 'rounded',
		width: 200,
		height: 50,
	},
}
