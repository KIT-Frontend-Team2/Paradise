import ChatIcon from '@mui/icons-material/Chat'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import Button from './Button'

export default {
	title: 'Atom/Button',
	tags: ['autodocs'],
	component: Button,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		button: { control: { type: 'text' } },
		size: {
			control: {
				type: 'select',
			},
			options: ['small', 'medium', 'medium-1', 'large', 'full'],
		},
		onClick: { action: '클릭' },
	},
}

export const 중간사이즈 = {
	args: {
		label: '채팅하기',
		size: 'medium',
		variant: 'primary',
		starticon: <ChatIcon fontSize="small" />,
	},
}
export const 중간사이즈_ver2 = {
	args: {
		label: '중복확인',
		size: 'medium-1',
		variant: 'outlined',
	},
}

export const 작은사이즈 = {
	args: {
		label: '확인',
		size: 'small',
		variant: 'gray-outlined',
	},
}

export const 큰사이즈 = {
	args: {
		label: '확인',
		size: 'large',
		variant: 'primary',
	},
}

export const 풀사이즈 = {
	args: {
		label: '확인',
		size: 'full',
		variant: 'primary',
	},
}

export const 비활성화 = {
	args: {
		label: '거래완료',
		size: 'medium',
		disabled: true,
	},
}
