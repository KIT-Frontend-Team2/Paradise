const userService = () => {
	const signUp = userInfo => {
		console.log(userInfo, '다음 정보로 회원가입을 진행합니다.')
	}

	const signIn = loginInfo => {
		console.log(loginInfo, '다음 정보로 로그인을 진행합니다')
	}

	const logOut = () => {
		console.log('로그아웃을 진행합니다.')
	}

	const checkNickName = nickName => {
		console.log(nickName, '다음 닉네임이 중복이 있는지 검사합니다.')
	}

	const checkEmail = email => {
		console.log(email, '다음 이메일이 중복이 있는지 검사합니다.')
	}

	const getRefreshToken = () => {
		console.log('리프레시 토큰을 재발급 받습니다.')
	}

	const getUserInfo = () => {
		console.log('로그인한 유저의 정보를 조회합니다.')
	}

	const getMyPage = () => {
		console.log('로그인한 유저의 마이페이지를 조회합니다.')
	}

	const changeUserInfo = UserInfo => {
		console.log(UserInfo, '유저의 정보(프로필, 비밀번호 제외)를 수정합니다.')
	}

	const changeUserProfile = image => {
		console.log(image, '유저의 프로필을 수정합니다.')
	}

	const changeUserPassword = password => {
		console.log(password, '유저의 비빌먼호를 수정합니다.')
	}

	const getMyPageProductInfo = (page, category) => {
		console.log(
			page,
			'페이지',
			category,
			'카테고리 구분으로 등록 물품을 조회합니다.',
		)
	}

	const getMyPageLikeProductInfo = page => {
		console.log(page, '마이페이지 내의 관심 상품들을 조회합니다.')
	}

	const getMyPageAccountBook = (page, category, start, end) => {
		console.log(
			page,
			category,
			start,
			'에서 ',
			end,
			'까지 가계부를 조회합니다.',
		)
	}

	return {
		signIn,
		signUp,
		logOut,
		changeUserInfo,
		changeUserPassword,
		changeUserProfile,
		getMyPageProductInfo,
		getMyPageLikeProductInfo,
		getMyPageAccountBook,
		checkNickName,
		getRefreshToken,
		checkEmail,
		getUserInfo,
		getMyPage,
	}
}

export default userService
