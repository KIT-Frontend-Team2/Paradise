import SideChatButton from './SideChatButton'

export default {
	title: 'Organisms/SideChatButton',
	tags: ['autodocs'],
	component: SideChatButton,
	argTypes: {
		onClick: { action: '클릭' },
	},
}

const Template = args => <SideChatButton {...args} />

export const Controls = Template.bind({})

Controls.args = {
	isNew: false,
}
