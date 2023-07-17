const { styled } = require('styled-components')

const S = {}

S.Input = styled.input`
	flex-grow: 1;
	padding: 0 16px;
	height: 50px;
	line-height: 50px;
	font-size: 18px;
	color: ${({ theme }) => theme.PALETTE.black};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[500]};
	border-radius: 6px;
	box-sizing: border-box;
	&::placeholder {
		color: #999;
	}
`
export default S
