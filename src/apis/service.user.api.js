const userService = {
	signUp(userInfo) {
		console.log(userInfo, '다음 정보로 회원가입을 진행합니다.')
	},

	signIn(loginInfo) {
		console.log(loginInfo, '다음 정보로 로그인을 진행합니다')
	},

	logOut() {
		console.log('로그아웃을 진행합니다.')
	},

	checkNickName(nickName) {
		console.log(nickName, '다음 닉네임이 중복이 있는지 검사합니다.')
	},

	checkEmail(email) {
		console.log(email, '다음 이메일이 중복이 있는지 검사합니다.')
	},

	getRefreshToken() {
		console.log('리프레시 토큰을 재발급 받습니다.')
	},

	getUserInfo() {
		console.log('로그인한 유저의 정보를 조회합니다.')
	},

	getMyPage() {
		console.log('로그인한 유저의 마이페이지를 조회합니다.')
	},

	changeUserInfo(UserInfo) {
		console.log(UserInfo, '유저의 정보(프로필, 비밀번호 제외)를 수정합니다.')
	},

	/**
	 * @param image File
	 */
	changeUserProfile(image) {
		console.log(image, '유저의 프로필을 수정합니다.')
	},

	changeUserPassword(password) {
		console.log(password, '유저의 비빌먼호를 수정합니다.')
	},

	getMyPageProductInfo(page, category) {
		console.log(
			page,
			'페이지',
			category,
			'카테고리 구분으로 등록 물품을 조회합니다.',
		)
	},

	getMyPageLikeProductInfo(page) {
		console.log(page, '마이페이지 내의 관심 상품들을 조회합니다.')
	},

	getMyPageAccountBook(page, category, start, end) {
		console.log(
			page,
			category,
			start,
			'에서 ',
			end,
			'까지 가계부를 조회합니다.',
		)
	},
}
