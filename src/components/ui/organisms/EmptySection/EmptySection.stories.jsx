import styled from 'styled-components'

import EmptySection from './EmptySection'

export default {
	title: 'Organisms/EmptySection',
	tags: ['autodocs'],
	component: EmptySection,
	decorators: [
		Story => (
			<S.Container>
				<Story />
			</S.Container>
		),
	],
}
const S = {}

S.Container = styled.div`
	height: 400px;
`
const Template = args => <EmptySection {...args} />

export const Controls = Template.bind({})

Controls.args = {
	titleMessage: '근처에 물건을 파는 사람이 없어요',
	size: 400,
}
