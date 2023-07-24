import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import HeaderMobile from './HeaderMobile'

export default {
	title: 'Organisms/HeaderMobile',
	tags: ['autodocs'],
	component: HeaderMobile,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

const Template = () => <HeaderMobile />

export const Controls = Template.bind({})
