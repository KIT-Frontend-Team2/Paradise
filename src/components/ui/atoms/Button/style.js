import { css, styled } from 'styled-components'

const variantCSS = {
	primary: css`
		color: ${({ theme }) => theme.PALETTE.background.white};
		border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
		background-color: ${({ theme }) => theme.PALETTE.primary[100]};
		&:hover {
			border: 1px solid ${({ theme }) => theme.PALETTE.primary[200]};
			background-color: ${({ theme }) => theme.PALETTE.primary[200]};
		}
	`,

	'primary-outlined': css`
		color: ${({ theme }) => theme.PALETTE.primary[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
		background-color: ${({ theme }) => theme.PALETTE.background.white};
		&:hover {
			color: ${({ theme }) => theme.PALETTE.background.white};
			border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
			background-color: ${({ theme }) => theme.PALETTE.primary[100]};
		}
	`,

	outlined: css`
		color: ${({ theme }) => theme.PALETTE.black};
		border: 1px solid ${({ theme }) => theme.PALETTE.black};
		background-color: ${({ theme }) => theme.PALETTE.background.white};
		&:hover {
			color: ${({ theme }) => theme.PALETTE.background.white};
			border: 1px solid ${({ theme }) => theme.PALETTE.tertiary};
			background-color: ${({ theme }) => theme.PALETTE.tertiary};
		}
	`,

	'gray-outlined': css`
		color: ${({ theme }) => theme.PALETTE.black};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[500]};
		background-color: ${({ theme }) => theme.PALETTE.background.white};
	`,

	cancel: css`
		color: ${({ theme }) => theme.PALETTE.background.white};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[500]};
		background-color: ${({ theme }) => theme.PALETTE.gray[500]};
		&:hover {
			color: ${({ theme }) => theme.PALETTE.background.white};
			border: 1px solid ${({ theme }) => theme.PALETTE.gray[600]};
			background-color: ${({ theme }) => theme.PALETTE.gray[600]};
		}
	`,
}

const wishCSS = {
	wish: css`
		background-color: ${({ theme }) => theme.PALETTE.background.white};
		border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
		width: 50px;
		height: 50px;
		svg {
			color: ${({ theme }) => theme.PALETTE.primary[100]};
		}
	`,

	'wish-on': css`
		background-color: ${({ theme }) => theme.PALETTE.background.white};
		border: 1px solid ${({ theme }) => theme.PALETTE.secondary};
		width: 50px;
		height: 50px;
		svg {
			color: ${({ theme }) => theme.PALETTE.secondary};
		}
	`,
}

const sizeCSS = {
	xsmall: css`
		width: 66px;
		height: 32px;
	`,

	small: css`
		width: 96px;
		height: 42px;
		font-size: 13px;
		font-weight: normal;
	`,

	medium: css`
		width: 170px;
		height: 50px;
		font-size: 18px;
	`,

	'medium-1': css`
		width: 150px;
		height: 50px;
		font-size: 18px;
	`,

	large: css`
		width: 50%;
		height: 64px;
		font-size: 20px;
	`,

	full: css`
		width: 100%;
		height: 64px;
		font-size: 20px;
	`,
}

const disabledCSS = {
	true: css`
		color: ${({ theme }) => theme.PALETTE.gray[800]} !important;
		font-weight: normal !important;
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[300]} !important;
		background-color: ${({ theme }) => theme.PALETTE.gray[300]} !important;
		cursor: default !important;
	`,
}

const S = {}

S.Button = styled.button`
	${({ size }) => sizeCSS[size]}
	${({ variant }) => variantCSS[variant]}
	${({ disabled }) => disabledCSS[disabled]}
	display:flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	font-weight: bold;
	border-radius: 6px;
	cursor: pointer;
`

S.WishButton = styled.button`
	${({ variant }) => wishCSS[variant]};
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	font-weight: bold;
	border-radius: 6px;
	cursor: pointer;
`

export default S
