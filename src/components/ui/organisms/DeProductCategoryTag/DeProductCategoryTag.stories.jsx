import { ThemeProvider } from 'styled-components'

import theme from '../../../../styles/theme'
import DeProductCategoryTag from './DeProductCategoryTag'

export default {
	title: 'Organisms/DeProductCategoryTag',
	tags: ['autodocs'],
	component: DeProductCategoryTag,
	argTypes: {
		category: { control: 'object' },
	},
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

const Template = args => <DeProductCategoryTag category={args.category} />

export const Controls = Template.bind({})

Controls.args = {
	category: ['의류 / 신발', '바오바오', '중고', '한번만씀'],
}
