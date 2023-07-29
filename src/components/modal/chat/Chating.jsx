import styled from 'styled-components'

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import ChatProductCard from './ChatProductCard'

const Chating = ({ chatData, conversations }) => {
	const conversation = conversations.find(
		conv => conv.id === chatData.conversationId,
	)
	return (
		<div>
			<S.ChatProductCardContent>
				<ChatProductCard chatData={chatData} />
			</S.ChatProductCardContent>
			<S.MeesageContent>
				{conversation &&
					conversation.messages.map(message => (
						<ChatMessage
							key={message.id}
							message={message}
							chatData={chatData}
						/>
					))}
			</S.MeesageContent>
			<S.ChatInputContent>
				<ChatInput />
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
	height: calc(100vh - 150px);
	overflow-y: auto;
`
