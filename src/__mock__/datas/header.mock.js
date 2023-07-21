export const headerMock = {
	status: 200,
	message: 'success',
	data: {
		user_login_status: true, // 로그인 상태 (로그인 true, 로그아웃 false)
		last_chat_time: 1678765432, // 마지막 채팅의 유닉스 시간
		last_chat_ago: '5분 전', // 마지막 채팅의 한국어 번역 시간
		product_name: '루이까또즈 가방 미니캐123123123',
		user_info: {
			user_nick_name: '네이처',
			user_profile_url:
				'https://flexible.img.hani.co.kr/flexible/normal/400/500/imgdb/original/2023/0503/20230503501277.jpg',
		},
	},
}
