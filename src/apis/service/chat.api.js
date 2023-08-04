import { axiosInstance } from 'apis/axiosInstance'
import API_KEY from 'consts/ApiKey'

const chatService = {
	makeChat: prod_idx => {
		// console.log(prod_idx, '해당 상품의 채팅방을 생성합니다.')
		return axiosInstance.post(API_KEY.API + API_KEY.CHAT, {
			prod_idx,
		})
	},

	readAllChat: room_idx => {
		// console.log(room_idx, '현재 채팅방의 모든 채팅을 읽습니다.')
		return axiosInstance.post(API_KEY.API + API_KEY.CHAT + '/read-all', {
			room_idx,
		})
	},

	sendChat: (room_idx, message) => {
		// console.log(room_idx, '해당 채팅방에', message, '메세지를 전송합니다')
		return axiosInstance.post(API_KEY.API + API_KEY.CHAT + '/send', {
			room_idx,
			message,
		})
	},

	getChatLog: room_idx => {
		// console.log(room_idx, '해당 채팅방에 로그를 조회합니다.')
		return axiosInstance.get(API_KEY.API + API_KEY.CHAT + '/chat-log', {
			params: { room_idx },
		})
	},

	getChatList: category => {
		// console.log(category, '해당 채팅방 목록을 조회합니다.')
		return axiosInstance.get(API_KEY.API + API_KEY.CHAT + '/chat-room-list', {
			params: { category },
		})
	},

	getChatProduct: (page, prod_idx) => {
		// console.log(prod_idx, '해당 상품의 ', page, '페이지 정보를 조회합니다.')
		return axiosInstance.get(
			API_KEY.API + API_KEY.CHAT + '/product-chat-list',
			{
				params: { page, prod_idx },
			},
		)
	},
}

export default chatService
