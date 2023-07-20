import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import UpdateButton from './UpdateButton'

export default {
	title: 'Atom/UpdateButton',
	tags: ['autodocs'],
	component: UpdateButton,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		onClick: { action: '클릭' },
	},
}

const Template = args => <UpdateButton />

export const Controls = Template.bind({})
