import styled from 'styled-components'

import DeSectionTitle from './DeSectionTitle'

export default {
	title: 'Molecules/DeSectionTitle',
	tags: ['autodocs'],
	component: DeSectionTitle,
	argTypes: {
		title: { control: 'text' },
		rightTitle: { control: 'text' },
	},
	decorators: [
		Story => (
			<S.Box>
				<Story />
			</S.Box>
		),
	],
}
const S = {}

S.Box = styled.div`
	width: 80%;
	height: 100px;
`

export const 한쪽설명 = {
	args: {
		title: '타이틀',
	},
}

export const 양쪽설명 = {
	args: {
		title: '타이틀',
		rightTitle: '추가 텍스트',
	},
}
