import { atom } from 'recoil'

export const showChatState = atom({
	key: 'showChatState',
	default: false,
})

export const selectedChatState = atom({
	key: 'selectedChat',
	default: null,
})

export const chatLayoutState = atom({
	key: 'chatLayout',
	default: true,
})

export const setSearchClickState = atom({
	key: 'searchClick',
	default: false,
})
