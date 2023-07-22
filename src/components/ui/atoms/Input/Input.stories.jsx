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

export const 기본_인풋박스 = {
	args: {
		placeholder: '이메일을 입력해주세요',
	},
}

export const 인풋박스_넓이_지정 = {
	args: {
		placeholder: '이메일을 입력해주세요',
		width: '500',
	},
}

export const 인풋박스_에러메세지 = {
	args: {
		placeholder: '이메일을 입력해주세요',
		error: '이메일을 입력해주세요',
	},
}

export const 인풋박스_readonly = {
	args: {
		placeholder: '이메일을 입력해주세요',
		readOnly: true,
	},
}
