import { API_KEYWORD } from 'consts/header/apiKeyword'
import { atom } from 'recoil'

export const selectApiTypeAtom = atom({
	key: 'selectApiTypeAtom',
	default: API_KEYWORD.SECONDHAND_DEALS,
})

export const isLoggedInAtom = atom({
	key: 'isLoggedInAtom',
	default: false,
})
