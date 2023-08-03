const TOKEN_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiand0IiwiaWR4Ijo3MiwiaWF0IjoxNjkwOTgyMjI1LCJleHAiOjE2OTExODIyMjV9.4ufDid5iBPKmVLG618ukC5Eazae4AGxhfUk_AyLDXbE'
const TokenRepository = {
	setToken(token) {
		localStorage.setItem(TOKEN_KEY, token)
	},
	getToken() {
		return localStorage.getItem(TOKEN_KEY)
	},
	removeToken() {
		localStorage.removeItem(TOKEN_KEY)
	},
}

export default TokenRepository
