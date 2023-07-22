import { MChip } from '../Chip/MChip'
import MTooltip from './MTooltip'

export default {
	title: 'Atom/MTooltip',
	tags: ['autodocs'],
	component: MTooltip,
	argTypes: {
		title: { control: 'text' },
		placement: {
			control: {
				type: 'select',
			},
			options: [
				'top-start',
				'top',
				'top-end',
				'left-start',
				'left',
				'left-end',
				'right-start',
				'right',
				'right-end',
				'bottom-start',
				'bottom',
				'bottom-end',
			],
		},
	},
}

const Template = args => (
	<MTooltip {...args}>
		<MChip label={'라벨'} />
	</MTooltip>
)
export const Controls = Template.bind({})

export const 안내문구 = {
	args: {
		title: '이동합니다.',
		children: <MChip label={'라벨'} />,
	},
}
