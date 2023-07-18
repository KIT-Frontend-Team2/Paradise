import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import Input from './Input'

export default {
	title: 'Atom/Input',
	tags: ['autodocs'],
	component: Input,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

export const 인풋박스 = {
	placeholder: '이메일을 입력해주세요',
}
