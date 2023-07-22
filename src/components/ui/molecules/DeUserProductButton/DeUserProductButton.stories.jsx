import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import DeUserProductButton from './DeUserProductButton'

export default {
	title: 'Molecules/DeUserProductButton',
	tags: ['autodocs'],
	component: DeUserProductButton,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		productCount: { control: { type: 'number' } },
	},
}

const Template = args => (
	<DeUserProductButton productCount={args.productCount} />
)

export const Controls = Template.bind({})

Controls.args = {
	productCount: 42,
}
