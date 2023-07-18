import FaceIcon from '@mui/icons-material/Face'

import { MChip } from './MChip'

export default {
	title: 'Atom/MChip',
	tags: ['autodocs'],
	component: MChip,
	argTypes: {
		label: { control: 'text' },
		variant: {
			control: {
				type: 'select',
			},
			options: ['text', 'circular', 'rectangular', 'rounded'],
		},
		size: {
			control: {
				type: 'select',
			},
			options: [undefined, 'small'],
		},
		color: {
			control: {
				type: 'select',
			},
			options: [
				undefined,
				'primary',
				'secondary',
				'error',
				'info',
				'success',
				'warning',
			],
		},
	},
}

const Template = args => <MChip {...args} />

export const Controls = Template.bind()

export const IconWithChip = {
	args: {
		label: 'Avatar',
		icon: <FaceIcon />,
	},
}
