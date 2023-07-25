import chatListMock from '../../../__mock__/datas/chatList.mock'

const ChatList = () => {
	const chatLists = chatListMock.data
	return (
		<>
			{chatLists
				.filter(user => user === 'seller')
				.map(item => (
					<div></div>
				))}
		</>
	)
}

export default ChatList
