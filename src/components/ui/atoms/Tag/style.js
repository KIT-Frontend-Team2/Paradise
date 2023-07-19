import { css, styled } from 'styled-components'

const sizeCSS = {
	small: css`
		padding: 0 14px;
		max-width: 200px;
		height: 36px;
		line-height: 36px;
		font-size: 14px;
	`,

	medium: css`
		padding: 0 16px;
		max-width: 300px;
		height: 50px;
		line-height: 50px;
		font-size: 18px;
		font-weight: bold;
	`,
}

const S = {}

S.Tag = styled.div`
	${({ size }) => sizeCSS[size]};
	display: inline-flex;
	align-items: center;
	gap: 4px;
	background-color: white;
	border: 1px solid #cccccc;
	border-radius: 10px;
	color: ${({ theme }) => theme.PALETTE.black};
	box-sizing: border-box;
	&:before {
		content: '#';
	}
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	svg {
		color: ${({ theme }) => theme.PALETTE.gray[700]};
		cursor: pointer;
	}
`

export default S
