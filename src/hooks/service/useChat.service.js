import { queryClient } from 'App'
import chatService from 'apis/service/chat.api'
import { useMutation, useQuery } from 'react-query'

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
		const { mutate } = useMutation(
			() => chatService.sendChat(room_idx, message),
			{
				onMutate: async () => {
					await queryClient.cancelQueries(['chat', 'getChatLog'])
					const chatLog = queryClient.getQueryData(['chat', 'getChatLog'])
					queryClient.setQueryData(['chat', 'getChatLog'], prev => {
						const newChat = { ...prev }
						return newChat
					})
					return chatLog
				},
				onSuccess: () => queryClient.invalidateQueries(['chat', 'getChatLog']),
				onSettled: () => queryClient.invalidateQueries(['chat', 'getChatLog']),
			},
		)
		return { mutate }
	},
	useGetChatLog: params => {
		const { data, isLoading } = useQuery(
			['chat', 'getChatLog'],
			() => chatService.getChatLog(params),
			{
				placeholderData: { data: [] },
			},
		)

		return { data, isLoading }
	},
	useGetChatList: () => {
		const { data } = useQuery(['chat', 'getChatList'], () =>
			chatService.getChatList(),
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
