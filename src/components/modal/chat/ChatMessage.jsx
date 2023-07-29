// ChatMessage.jsx
import styled from 'styled-components'

const ChatMessage = ({ message, chatData }) => {
	console.log(chatData, message)
	const isSender = message.senderId === chatData.user.id

	const senderImage = isSender ? chatData.user.image : ''

	const receiverName = chatData.user.name

	return (
		<S.MessageContainer isSender={isSender}>
			<S.AvatarContainer>
				<img src={senderImage} />
			</S.AvatarContainer>
			<S.MessageBox>
				<S.MetaInfo>
					<S.UserName isSender={isSender}>
						{isSender ? '' : receiverName}
					</S.UserName>
					<S.MessageTime>{message.time}</S.MessageTime>
				</S.MetaInfo>
				{message.text && (
					<S.MessageText isSender={isSender}>{message.text}</S.MessageText>
				)}
			</S.MessageBox>
		</S.MessageContainer>
	)
}

export default ChatMessage

export const S = {}

S.MessageContainer = styled.div`
	display: grid;
	grid-template-columns: 40px 1fr;
	gap: 3px;
	width: 100%;
	direction: ${({ isSender }) => (isSender ? 'rtl' : 'ltr')};
`

S.AvatarContainer = styled.div`
	img {
		width: 30px;
		height: 30px;
	}
`

S.MessageBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
`

S.MetaInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 14px;
	margin-bottom: 5px;
`

S.UserName = styled.span`
	font-weight: ${({ isSender }) => (isSender ? 'bold' : 'normal')};
`

S.MessageTime = styled.span`
	font-size: 12px;
	color: #999;
`

S.MessageImage = styled.img`
	border-radius: 5px;
	max-width: 80%;
	margin-right: ${({ isSender }) => (isSender ? '0.6rem' : 'none')};
`

S.MessageText = styled.div`
	padding: 0.5rem;
	background-color: ${({ isSender }) => (isSender ? '#009D91' : '#ddd')};
	border-radius: ${({ isSender }) =>
		isSender ? '10px 0 10px 10px' : '0 10px 10px 10px'};
	color: ${({ isSender }) => (isSender ? '#fff' : '#333')};
`
