import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import theme from '../src/styles/theme'
import { BrowserRouter } from 'react-router-dom'

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<RecoilRoot>
					<Story />
				</RecoilRoot>
			</BrowserRouter>
		</ThemeProvider>
	),
]

export default preview
