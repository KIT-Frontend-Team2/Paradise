import { headerMock } from '__mock__/datas/header.mock'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import { useState } from 'react'
import styled from 'styled-components'

const HeaderChatAlarm = () => {
	const [showChatModal, setShowChatModal] = useState(true)
	const { isTablet } = useDevice()
	const handleChatModalClose = () => {
		setShowChatModal(false)
	}
	return (
		<>
			{showChatModal && (
				<S.ChatModal istablet={isTablet.toString()}>
					<S.ChatBox>
						<S.ChatText>새로운 채팅 도착!</S.ChatText>
						<S.ChatTime>{headerMock.data.last_chat_ago}</S.ChatTime>
					</S.ChatBox>
					<S.ProductName>{headerMock.data.product_name}</S.ProductName>
					<S.CloseButton onClick={handleChatModalClose}>닫기</S.CloseButton>
				</S.ChatModal>
			)}
		</>
	)
}

export default HeaderChatAlarm

export const S = {}

S.ChatModal = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: ${({ istablet }) => (istablet ? '180px' : '200px')};
	height: ${({ istablet }) => (istablet ? '80px' : '100px')};
	background-color: #f5f5f5;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 10px;
	right: 0px;
`

S.ChatBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 8px;
`

S.ChatText = styled.span`
	color: #f2714f;
	font-size: 12px;
	margin-bottom: 4px;
`

S.ChatTime = styled.span`
	color: #999;
	font-size: 12px;
`

S.ProductName = styled.span`
	color: black;
	font-size: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 180px;
`

S.CloseButton = styled.div`
	margin-top: 8px;
	margin-left: auto;
	color: #999;
	font-size: 12px;
	cursor: pointer;
`
