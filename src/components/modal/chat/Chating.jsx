import { useEffect } from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components'

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import ChatProductCard from './ChatProductCard'

const Chating = ({ chatData, conversations }) => {
	const messagesEndRef = useRef(null)
	// 채팅 스크롤
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({
			behavior: 'smooth',
		})
	}
	useEffect(() => {
		scrollToBottom()
	})

	const [messages, setMessages] = useState([])

	const handleMessageSubmit = message => {
		setMessages(prevMessage => [...prevMessage, message])
	}

	const conversation = conversations.find(
		conv => conv.id === chatData.conversationId,
	)

	// 채팅창 날짜 구분선
	const dateDividers = messages => {
		let prevDate = null
		const result = []

		messages.forEach(message => {
			const currDate = new Date(message.createdAt).toLocaleDateString()
			if (currDate !== prevDate) {
				result.push({ type: 'divider', date: currDate })
				prevDate = currDate
			}
			result.push(message)
		})

		return result
	}

	const chatDataWithDividers =
		conversation &&
		// dateDividers(conversation.messages)
		dateDividers(messages)

	const [collapsed, setCollapsed] = useState(false)
	const toggleCollapse = () => {
		setCollapsed(!collapsed)
	}

	return (
		<div>
			<S.ChatProductCardContent>
				<ChatProductCard
					chatData={chatData}
					collapsed={collapsed}
					toggleCollapse={toggleCollapse}
				/>
			</S.ChatProductCardContent>
			<S.MeesageContent collapsed={collapsed ? 'true' : 'false'}>
				{chatDataWithDividers &&
					chatDataWithDividers.map((item, index) =>
						item.type === 'divider' ? (
							<S.DateDivider key={`divider-${index}`}>
								<S.DateDividerLine />
								<S.DateDividerText>{item.date}</S.DateDividerText>
								<S.DateDividerLine />
							</S.DateDivider>
						) : (
							<ChatMessage
								key={`message-${index}`}
								message={item}
								chatData={chatData}
							/>
						),
					)}
				<div ref={messagesEndRef} />
			</S.MeesageContent>

			<S.ChatInputContent>
				<ChatInput onSubmit={handleMessageSubmit} />
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
	height: calc(
		700px - ${({ collapsed }) => (collapsed === 'true' ? '280px' : '320px')}
	);

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
