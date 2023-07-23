import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import FooterMobile from './FooterMobile'

export default {
	title: 'Organisms/FooterMobile',
	tags: ['autodocs'],
	component: FooterMobile,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

const Template = () => <FooterMobile />

export const Controls = Template.bind({})
