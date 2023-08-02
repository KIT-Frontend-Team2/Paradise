import API_KEY from '../consts/ApiKey'

const TokenRepository = {
	setUser(userInfo) {
		localStorage.setItem(API_KEY.USER, userInfo)
	},
	getUser() {
		return localStorage.getItem(API_KEY.USER)
	},
	removeUser() {
		localStorage.removeItem(API_KEY.USER)
	},
}

export default TokenRepository
