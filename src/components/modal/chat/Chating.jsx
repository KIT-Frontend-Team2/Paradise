import useChatApi from 'hooks/service/useChat.service'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import styled from 'styled-components'

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import ChatProductCard from './ChatProductCard'

const Chating = ({ setLayout, productInfo }) => {
	const { data } = useChatApi.useGetChatLog(230)
	console.log(data.data)

	const { mutate } = useChatApi.useSendChat(id)
	const messagesEndRef = useRef(null)
	// 채팅 스크롤
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({
			behavior: 'smooth',
		})
	}
	useEffect(() => {
		scrollToBottom()
	}, [data])

	const handleMessageSubmit = message => {
		mutate(message)
	}

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

	const chatDataWithDividers = dateDividers(data.data)

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
					chatDataWithDividers.map(data =>
						data.type === 'divider' ? (
							<S.DateDivider key={data.idx}>
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
