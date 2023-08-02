const chatService = {
	makeChat: productId => {
		console.log(productId, '해당 상품의 채팅방을 생성합니다.')
	},

	readAllChat: roomId => {
		console.log(roomId, '현재 채팅방의 모든 채팅을 읽습니다.')
	},

	sendChat: (roomId, message) => {
		console.log(roomId, '해당 채팅방에', message, '메세지를 전송합니다')
	},

	getChatLog: roomId => {
		console.log(roomId, '해당 채팅방에 로그를 조회합니다.')
	},

	getChatList: category => {
		console.log(category, '해당 채팅방 목록을 조회합니다.')
	},

	getChatProduct: (page, product) => {
		console.log(product, '해당 상품의 ', page, '페이지 정보를 조회합니다.')
	},
}

export default chatService
