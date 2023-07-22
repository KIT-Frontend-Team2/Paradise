import { styled } from 'styled-components'

const S = {}

S.InputBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	${({ width }) => (width ? `` : `flex-grow: 1;`)}
	width: ${({ width }) => `${width}px`};
	.error {
		color: ${({ theme }) => theme.PALETTE.secondary};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
`

S.Input = styled.input`
	padding: 0 16px;
	height: 50px;
	line-height: 50px;
	font-size: 18px;
	font-family: inherit;
	color: ${({ theme }) => theme.PALETTE.black};
	border: 1px solid
		${({ theme, error }) =>
			error ? theme.PALETTE.secondary : theme.PALETTE.gray[500]};
	border-radius: 6px;
	box-sizing: border-box;
	&::placeholder {
		color: #999;
	}
	background-color: ${({ theme, readOnly }) =>
		readOnly && theme.PALETTE.gray[100]};
`
export default S
