import styled from 'styled-components'

import ChatHeader from './ChatHeader'
import ChatList from './ChatList'

const Chat = () => {
	return (
		<S.ChatContainer>
			<div>
				<ChatHeader />
			</div>
			<div>
				{/* Chat Product Card 
        구매자일 경우 - 상품 보러가기(클릭시 해당 상품 상세 페이지로 이동), 판매자일 경우 - 예약하기(클릭시 예약중으로 변경), 판매완료(클릭시 해당 상품 판매완료 상태 등록) 
        상품 사진, '판매상태'상품명, 가격 */}
			</div>
			<div>
				{/* Chat Message 
        채팅 내용
        구매자 or 판매자 프로필 사진, 텍스트 박스(내용), 채팅 시간, 해당 날짜*/}
			</div>
			<div>
				{/* Chat User List 
        판매자에게만 보이는 화면, 해당 채팅 클릭시 selected 효과, 
        구매자 프로필, 구매자 닉네임, 마지막 채팅, 마지막 채팅 시간, 읽지 않은 채팅일 경우 점 뜨게끔*/}
			</div>
			<div>
				{/* Chat Input 
        채팅 인풋 박스*/}
			</div>
			<div>
				{/* Chat List 
        구매자에게만 보임? 
        상품 사진, '판매상태'상품명, 마지막 채팅, 가격, 마지막 채팅 시간, 읽지 않은 채팅일 경우 점 뜨게끔 */}
				<ChatList />
			</div>
		</S.ChatContainer>
	)
}

export default Chat

export const S = {}

S.ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 0;
	bottom: 0;
	width: 500px;
	height: 600px;
	background-color: white;
	border: 1px solid #eaeaea;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`
