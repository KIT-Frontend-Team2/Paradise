import chatListMock from '__mock__/datas/chatList.mock'
import { showChatState } from 'atom/chat/atom'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import ChatHeader from './ChatHeader'
import ChatList from './ChatList'
import Chating from './Chating'

const Chat = () => {
	const showChat = useRecoilValue(showChatState)
	const { users, products, conversations, messages } = chatListMock.data

	const [layout, setLayout] = useState(true)

	const [selectedChat, setSelectedChat] = useState(null)

	const handleChatClick = chatData => {
		setSelectedChat(chatData)
		setLayout(false)
	}

	const messagesWithProductData = messages
		.map(message => {
			const product = products.find(
				product => product.userId === message.senderId,
			)
			const user = users.find(user => user.id === message.senderId)

			if (!product || !user) {
				return null
			}

			return {
				...message,
				user_status: user.user_status,
				product_id: product.id,
				product_name: product.title,
				product_price: product.price,
				product_main_img_url: product.imageSrc,
				product_status: product.product_status,
			}
		})
		.filter(message => message) // null 값을 걸러냅니다.

	return (
		<>
			{showChat && (
				<S.ChatContainer>
					<ChatHeader layout={layout} setLayout={setLayout} />
					{!layout ? (
						<Chating chatData={selectedChat} />
					) : (
						<S.ChatListContent>
							<ChatList
								messages={messagesWithProductData}
								setLayout={setLayout}
								handleChatClick={handleChatClick}
							/>
						</S.ChatListContent>
					)}
				</S.ChatContainer>
			)}
		</>
	)
}

export default Chat

export const S = {}

S.ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 16px;
	bottom: 0;
	width: 600px;
	height: 700px;

	background-color: white;
	border: 1px solid #eaeaea;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 999;
`

S.ChatListContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: auto; // 스크롤 기능 추가
`
