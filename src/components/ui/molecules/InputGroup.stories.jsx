import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import InputGroup from './InputGroup'

export default {
	title: 'Molecules/InputGroup',
	tags: ['autodocs'],
	component: InputGroup,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

export const flex = {
	display: 'flex',
}

export const inline_flex = {
	display: 'inline-flex',
}
