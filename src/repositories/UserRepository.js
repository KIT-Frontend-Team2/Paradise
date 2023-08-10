import API_KEY from '../consts/ApiKey'

const UserRepository = {
	setUser(userInfo) {
		localStorage.setItem(API_KEY.USER, JSON.stringify(userInfo))
	},
	getUser() {
		return JSON.parse(localStorage.getItem(API_KEY.USER))
	},
	removeUser() {
		localStorage.removeItem(API_KEY.USER)
	},
}

export default UserRepository
