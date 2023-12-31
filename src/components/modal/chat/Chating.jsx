import chatService from 'apis/service/chat.api'
import useChatApi from 'hooks/service/useChat.service'
import { useEffect, useRef, useState } from 'react'
import { useSocket } from 'socket/socket'
import styled from 'styled-components'

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import ChatProductCard from './ChatProductCard'

const Chating = ({
	setLayout,
	id,
	productId,
	productTitle,
	productImage,
	productPrice,
	isRead,
	isSeller,
	admin,
}) => {
	const { data } = useChatApi.useGetChatLog(id)

	const [message, setMessage] = useState('')
	const [chat, setChat] = useState()
	const { mutate } = useChatApi.useSendChat()

	const socket = useSocket()

	useEffect(() => {
		chatService.getChatLog(id).then(res => {
			setChat(res.data)
		})
		socket.emit('join', { room_idx: id })
		socket.on('receiveMessage', data => {
			setChat(data)
		})

		return () => {
			socket.emit('leave', { room_idx: id })
		}
	}, [socket, id])

	const handleSubmit = e => {
		e.preventDefault()
		if (!message.trim()) return

		const msg = {
			title: productTitle,
			createdAt: new Date(),
			prod_idx: productId,
			room_idx: id,
			nickName: admin,
			message: message,
			isSeller: isSeller,
		}

		socket.emit('sendMessage', msg)

		mutate({
			room_idx: msg.room_idx,
			message: msg.message,
		})

		setMessage('')
	}

	// 채팅 스크롤
	const messagesEndRef = useRef(null)
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({
			behavior: 'smooth',
		})
	}
	useEffect(() => {
		if (data) {
			scrollToBottom()
		}
	}, [data])

	// 채팅창 날짜 구분선
	// const dateDividers = messages => {
	// 	let prevDate = null
	// 	const result = []

	// 	messages.map(message => {
	// 		const currDate = new Date(message.createdAt).toLocaleDateString()
	// 		if (currDate !== prevDate) {
	// 			result.push({ type: 'divider', date: currDate })
	// 			prevDate = currDate
	// 		}
	// 		result.push(message)
	// 	})

	// 	return result
	// }

	// const chatDataWithDividers = dateDividers(data.data)
	const chatDataWithDividers = data.data

	const [collapsed, setCollapsed] = useState(false)
	const toggleCollapse = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div>
			<S.ChatProductCardContent>
				<ChatProductCard
					id={productId}
					productTitle={productTitle}
					productImage={productImage}
					productPrice={productPrice}
					collapsed={collapsed}
					toggleCollapse={toggleCollapse}
					setLayout={setLayout}
				/>
			</S.ChatProductCardContent>
			<S.MeesageContent collapsed={collapsed ? 'true' : 'false'}>
				{chatDataWithDividers &&
					chatDataWithDividers.map((data, index) =>
						data.type === 'divider' ? (
							<S.DateDivider key={index}>
								<S.DateDividerLine />
								<S.DateDividerText>{data.date}</S.DateDividerText>
								<S.DateDividerLine />
							</S.DateDivider>
						) : (
							<ChatMessage
								key={data.idx}
								id={data.idx}
								createdAt={data.createdAt}
								messages={data.message}
								nickName={data.User.nick_name}
								profileUrl={data.User.profile_url}
								isRead={isRead}
								admin={admin}
							/>
						),
					)}
				<div ref={messagesEndRef} />
			</S.MeesageContent>
			<S.ChatInputContent>
				<ChatInput
					// productTitle={productTitle}
					// productId={productId}
					// roomId={id}
					// nickName={selectedChat.User.nick_name}
					// isSeller={isSeller}
					// socket={socket}
					// admin={admin}
					handleSubmit={handleSubmit}
					message={message}
					setMessage={setMessage}
				/>
			</S.ChatInputContent>
		</div>
	)
}

export default Chating

export const S = {}

S.ChatProductCardContent = styled.div`
	display: flex;
	justify-content: center;
`
S.ChatInputContent = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`

S.MeesageContent = styled.div`
	width: 100%;
	height: ${({ theme, collapsed }) =>
		theme.isDesktop || theme.isTabletAndLaptop
			? `calc( 700px - ${collapsed === 'true' ? '260px' : '320px'});`
			: `calc(100vh - ${collapsed === 'true' ? '260px' : '320px'});`};

	background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	overflow-y: auto;
	padding-top: ${({ collapsed }) => (collapsed === 'true' ? '100px' : '160px')};
`
S.DateDivider = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	margin-bottom: 36px;
`

S.DateDividerLine = styled.span`
	flex-grow: 1;
	height: 1px;
	background: #ccc;
	margin: 0 8px;
`

S.DateDividerText = styled.span`
	color: #999;
	font-size: 14px;
`
