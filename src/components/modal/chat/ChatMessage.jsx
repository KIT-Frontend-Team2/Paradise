import styled, { css } from 'styled-components'

const ChatMessage = ({
	id,
	createdAt,
	messages,
	nickName,
	profileUrl,
	isRead,
	isSeller,
	admin,
}) => {
	const isSender = admin === nickName
	const senderImage = isSender ? '' : profileUrl

	const formDate = dateString => {
		const date = new Date(dateString)
		return date.toLocaleTimeString('ko-KR', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		})
	}
	return (
		<S.MessageContainer $issender={isSender}>
			<S.AvatarContainer $hasimage={!isSender}>
				{!isSender && <img src={senderImage} />}
			</S.AvatarContainer>
			<S.MessageBox $issender={isSender}>
				{messages && (
					<S.MessageText $issender={isSender}>{messages}</S.MessageText>
				)}
				<S.MetaInfo>
					{!isRead && <S.UnreadIndicator>1</S.UnreadIndicator>}
					<S.MessageTime>{formDate(createdAt)}</S.MessageTime>
				</S.MetaInfo>
			</S.MessageBox>
		</S.MessageContainer>
	)
}

export default ChatMessage

export const S = {}

S.MessageContainer = styled.div`
	display: grid;
	grid-template-columns: ${({ $issender }) => ($issender ? '1fr' : '40px 1fr')};
	gap: 3px;
	width: 100%;
	direction: ${({ $issender }) => ($issender ? 'rtl' : 'ltr')};
`

S.AvatarContainer = styled.div`
	${({ $hasimage }) =>
		$hasimage
			? css`
					img {
						width: 30px;
						height: 30px;
						border-radius: 50%;
						margin-left: 8px;
					}
			  `
			: css`
					width: 0;
					height: 0;
					padding: 0;
			  `}
`

S.MessageBox = styled.div`
	display: flex;
	align-items: end;
	padding-right: ${({ issender }) => (issender ? 0 : '10px')};
	padding-bottom: 10px;
`

S.MetaInfo = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: auto;
	align-items: center;
	/* gap: 5px; */
	font-size: 14px;
	padding: 0 8px;
`

S.MessageTime = styled.span`
	grid-row: 2 / 3;
	grid-column: 1;
	font-size: 12px;
	color: #999;
`

S.MessageText = styled.div`
	padding: 0.5rem;
	background-color: ${({ $issender }) => ($issender ? '#009D91' : '#ddd')};
	border-radius: ${({ $issender }) =>
		$issender ? '10px 0 10px 10px' : '0 10px 10px 10px'};
	color: ${({ $issender }) => ($issender ? '#fff' : '#333')};
`
S.UnreadIndicator = styled.div`
	grid-row: 1 / 2;
	grid-column: 1;
	font-size: 12px;
`
