import styled from 'styled-components'

import LineBar from './LineBar'

export default {
	title: 'Atom/LineBar',
	tags: ['autodocs'],
	component: LineBar,
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
	width: 70%;
	height: 50px;
	border: 1px solid darkgray;
`

const Template = args => <LineBar />

export const Controls = Template.bind({})
