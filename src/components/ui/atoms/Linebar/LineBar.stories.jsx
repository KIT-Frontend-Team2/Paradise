import styled from 'styled-components'

import LineBar from './LineBar'

export default {
	title: 'Atom/LineBar',
	tags: ['autodocs'],
	component: LineBar,
	argTypes: {
		width: { control: { type: 'number' } },
	},
	decorators: [
		Story => (
			<S.Block>
				<Story />
			</S.Block>
		),
	],
}
const S = {}

S.Block = styled.div`
	width: 100%;
	margin: 0 auto;
	border: 1px solid darkgray;
`

const Template = args => <LineBar {...args} />

export const Controls = Template.bind({})

Controls.args = {
	width: 90,
}
