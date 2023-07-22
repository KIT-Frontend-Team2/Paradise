import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import DeProductTitle from './DeProductTitle'

export default {
	title: 'Molecules/DeProductTitle',
	tags: ['autodocs'],
	component: DeProductTitle,
	argTypes: {
		title: { control: 'text' },
		chatCount: { control: { type: 'number' } },
		like: { control: { type: 'number' } },
		time: { control: 'date' },
	},
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

const Template = args => <DeProductTitle {...args} />

export const Controls = Template.bind({})

Controls.args = {
	title: '바오바오 (링숄더백)',
	chatCount: 2,
	like: 40,
	time: '2023-07-12T07:12:01.656Z',
}
