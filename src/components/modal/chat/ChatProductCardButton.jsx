import React from 'react'
import styled from 'styled-components'

const ChatProductCardButton = ({ children, ...rest }) => {
	return <S.Button {...rest}>{children}</S.Button>
}

export default ChatProductCardButton

export const S = {}

S.Button = styled.button`
	width: 124px;
	border: 1px solid #009d91;
	color: #009d91;
	background-color: transparent;
	padding: 8px 16px;
	font-size: 16px;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: #009d91;
		color: #ffffff;
	}
`
