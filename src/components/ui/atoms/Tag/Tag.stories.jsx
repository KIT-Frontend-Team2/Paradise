import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import Tag from './Tag'

export default {
	title: 'Atom/Tag',
	tags: ['autodocs'],
	component: Tag,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

export const 기본_태그 = {
	args: {
		label: '판매',
	},
}
