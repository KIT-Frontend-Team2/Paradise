import { InsertPhoto, Send } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import useChatApi from 'hooks/service/useChat.service'
import { useRef } from 'react'
import styled from 'styled-components'

const ChatInput = ({
	productTitle,
	productId,
	roomId,
	nickName,
	isSeller,
	socket,
	admin,
}) => {
	const msgRef = useRef()
	const { mutate } = useChatApi.useSendChat()

	const handleSubmit = e => {
		e.preventDefault()
		if (!msgRef.current.value.trim()) return

		const data = {
			title: productTitle,
			createdAt: new Date(),
			prod_idx: productId,
			room_idx: roomId,
			nickName: admin,
			message: msgRef.current.value,
			isSeller: isSeller,
		}

		socket.emit('sendMessage', data)
		mutate(data.room_idx, data.message)

		msgRef.current.value = ''
		console.log(data)
	}

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
				ref={msgRef}
				onKeyPress={handleKeyDown}
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
