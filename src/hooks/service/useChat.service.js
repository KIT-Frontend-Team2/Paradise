const { default: chatService } = require('apis/service/chat.api')
const { useMutation, useQuery } = require('react-query')

const useChatApi = {
	useMakeChat: prod_idx => {
		const { mutate } = useMutation(() => chatService.makeChat(prod_idx))
		return { mutate }
	},
	useReadAllChat: room_idx => {
		const { mutate } = useMutation(() => chatService.readAllChat(room_idx))
		return { mutate }
	},
	useSendChat: (room_idx, message) => {
		const { mutate } = useMutation(() =>
			chatService.sendChat(room_idx, message),
		)
		return { mutate }
	},
	useGetChatLog: params => {
		const { data, isLoading } = useQuery(
			['chat', 'getChatLog'],
			() => chatService.getChatLog(params),
			{
				retry: 5,
				onSuccess: res => {
					console.log(res)
				},
				onError: err => {
					console.log(err)
				},
			},
		)

		return { data, isLoading }
	},
	useGetChatList: category => {
		const { data } = useQuery(['chat', 'getChatList', category], () =>
			chatService.getChatList(category),
		)
		return { data }
	},
	useGetChatProduct: (page, prod_idx) => {
		const { data } = useQuery(['chat', 'getChatProduct', page, prod_idx], () =>
			chatService.getChatProduct(page, prod_idx),
		)
		return { data }
	},
}

export default useChatApi
