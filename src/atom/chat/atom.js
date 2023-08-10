import { atom } from 'recoil'

export const showChatState = atom({
	key: 'showChatState',
	default: false,
})

export const selectedChatState = atom({
	key: 'selectedChat',
	default: null,
})
