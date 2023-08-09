import { InsertPhoto, Send } from '@mui/icons-material'
import { IconButton } from '@mui/material'
// import useChatApi from 'hooks/service/useChat.service'
// import { useState } from 'react'
import styled from 'styled-components'

const ChatInput = ({
	// productTitle,
	// productId,
	// roomId,
	// isSeller,
	// socket,
	// admin,
	handleSubmit,
	message,
	setMessage,
}) => {
	const handleKeyDown = e => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			handleSubmit(e)
		}
	}

	const chooseImage = () => {
		alert('서비스 준비 중입니다.')
	}

	return (
		<S.Form onSubmit={handleSubmit}>
			<S.Input
				type="text"
				placeholder="메시지를 입력해주세요."
				value={message}
				onChange={e => setMessage(e.target.value)}
				onKeyPress={handleKeyDown}
				autoFocus={true}
			/>

			<S.IconContainer>
				<IconButton onClick={chooseImage}>
					<InsertPhoto />
				</IconButton>
				<S.SendButton type="submit">
					<Send />
				</S.SendButton>
			</S.IconContainer>
		</S.Form>
	)
}

export default ChatInput

export const S = {}

S.Form = styled.form`
	border-top: 1px solid #999999;
	width: 100%;
	height: 100px;
	padding-top: 8px;
	background-color: #fff;
	position: relative;
`

S.Input = styled.textarea`
	border: none;
	outline: none;
	width: 550px;
	height: 60px;
	resize: none;
	padding-left: 8px;
`

S.IconContainer = styled.div`
	position: absolute;
	right: 10px;
	bottom: 15px;
	display: flex;
	cursor: pointer;
`

S.SendButton = styled(IconButton)`
	&:hover {
		color: #009d91;
	}
`
