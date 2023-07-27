import styled from 'styled-components'

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import ChatProductCard from './ChatProductCard'

const Chating = ({ chatData }) => {
	return (
		<div>
			<S.ChatProductCardContent>
				<ChatProductCard chatData={chatData} />
			</S.ChatProductCardContent>
			<div>
				<ChatMessage />
			</div>
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
	margin-top: 10px;
`
S.ChatInputContent = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`
