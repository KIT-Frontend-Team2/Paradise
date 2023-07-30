import styled from 'styled-components'

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import ChatProductCard from './ChatProductCard'

const Chating = ({ chatData, conversations }) => {
	const conversation = conversations.find(
		conv => conv.id === chatData.conversationId,
	)
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
		conversation && dateDividers(conversation.messages)

	return (
		<div>
			<S.ChatProductCardContent>
				<ChatProductCard chatData={chatData} />
			</S.ChatProductCardContent>
			<S.MeesageContent>
				{chatDataWithDividers &&
					chatDataWithDividers.map(item =>
						item.type === 'divider' ? (
							<S.DateDivider key={item.date}>
								<S.DateDividerLine />
								<S.DateDividerText>{item.date}</S.DateDividerText>
								<S.DateDividerLine />
							</S.DateDivider>
						) : (
							<ChatMessage key={item.id} message={item} chatData={chatData} />
						),
					)}
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
	padding-top: 160px;
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
