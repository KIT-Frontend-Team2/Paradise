import {
	chatLayoutState,
	selectedChatState,
	showChatState,
} from 'atom/chat/atom'
import useChatApi from 'hooks/service/useChat.service'
import { useRecoilState, useRecoilValue } from 'recoil'
import UserRepository from 'repositories/UserRepository'
import styled from 'styled-components'

import ChatHeader from './ChatHeader'
import ChatList from './ChatList'
import Chating from './Chating'

const Chat = () => {
	const showChat = useRecoilValue(showChatState)

	const { data } = useChatApi.useGetChatList()

	const user = UserRepository.getUser()
	const admin = user.nickName

	const [selectedChat, setSelectedChat] = useRecoilState(selectedChatState)

	const [layout, setLayout] = useRecoilState(chatLayoutState)

	const handleChatClick = data => {
		setSelectedChat(data)
		setLayout(false)
	}

	return (
		<>
			{showChat && (
				<S.ChatContainer>
					<ChatHeader layout={layout} setLayout={setLayout} />
					{!layout ? (
						<Chating
							id={selectedChat.idx}
							productId={selectedChat.product.idx}
							productTitle={selectedChat.product.title}
							productImage={selectedChat.product.img_url}
							productPrice={selectedChat.product.price}
							isRead={selectedChat.isRead}
							isSeller={selectedChat.isSeller}
							admin={admin}
							setLayout={setLayout}
						/>
					) : (
						<S.ChatListContent>
							{data.data.chats &&
								data.data.chats.map(data => (
									<ChatList
										key={data.idx}
										data={data}
										id={data.idx}
										productImage={data.product.img_url}
										productTitle={data.product.title}
										productPrice={data.product.price}
										createdAt={data.lastMessageCreatedAt}
										lastMessage={data.lastMessage}
										isRead={data.isRead}
										// setLayout={setLayout}
										handleChatClick={handleChatClick}
									/>
								))}
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
	right: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '16px' : '0'};
	bottom: 0;
	width: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '600px' : '100%'};
	height: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '700px' : '100%'};

	background-color: white;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	z-index: 1200;
`

S.ChatListContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: auto; // 스크롤 기능 추가
`
