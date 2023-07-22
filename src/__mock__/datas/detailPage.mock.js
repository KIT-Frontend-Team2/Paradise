const detailPageMock = {
	status: 200,
	message: 'success',
	data: {
		isBuyer: false, // 조회한 사람이 구매자인지 판매자인지
		isLike: false, // 상품을 좋아요 했는지 안했는지
		product_id: 715, // 상품의 아이디
		product_name: '바오바오 (링숄더백)', // 상품의 이름
		product_price: 115000, // 상품의 가격
		product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
		product_state: '판매중', // 상품의 상태
		product_imgs: [
			{
				id: '1',
				img_url:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
			},
			{
				id: '2',
				img_url:
					'https://media.bunjang.co.kr/product/215187391_2_1676610122_w856.jpg',
			},
			{
				id: '3',
				img_url:
					'https://media.bunjang.co.kr/product/215187391_3_1676610122_w856.jpg',
			},
			{
				id: '4',
				img_url:
					'https://media.bunjang.co.kr/product/215187391_4_1676610122_w856.jpg',
			},
			{
				id: '5',
				img_url:
					'https://media.bunjang.co.kr/product/215187391_5_1676610122_w856.jpg',
			},
		],
		product_content:
			'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
		product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
		product_update_at: '2023-04-14T13:59:49.690Z', // 상품을 업데이트한 시간
		product_like: 2, // 상품의 좋아요 갯수
		product_chat_count: 5, // 상품의 채팅 갯수
		product_tag: [
			'의류 / 신발',
			'바오바오',
			'중고',
			'한번만씀',
			'바오바오',
			'중고',
			'한번만씀',
		],
		seller_info: {
			user_id: 'nature', // 상품을 게시한 사람의 아이디
			user_nick_name: '네이쳐', // 판매자의 닉네임
			user_profile_url:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbrvjmx%2FbtrQfeNBD8C%2FPulqvzCWn30z0ssA5CL0vk%2Fimg.jpg', // 판매자의 프로필 이미지
			user_temperature: 39.8, // 판매자의 매너온도
			user_product_count: 47, // 판매자가 올린 게시물수
			user_product_list: [
				{
					id: '120',
					name: '한대 터져볼래',
					img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbrvjmx%2FbtrQfeNBD8C%2FPulqvzCWn30z0ssA5CL0vk%2Fimg.jpg', // 상품의 대표 이미지 주소
				},
				{
					id: '50',
					name: '램프2',
					img: 'https://media.bunjang.co.kr/product/229927983_1_1689321636_w292.jpg',
				},
				{
					id: '44',
					name: '램프3',
					img: 'https://media.bunjang.co.kr/product/229927983_1_1689321636_w292.jpg',
				},
				{
					id: '145',
					name: '램프4',
					img: 'https://media.bunjang.co.kr/product/192869261_1_1685019943_w292.jpg',
				},
				{
					id: '5124',
					name: '램프5',
					img: 'https://media.bunjang.co.kr/product/226840555_1_1686560346_w292.jpg',
				},
				{
					id: '2231',
					name: '램프6',
					img: 'https://media.bunjang.co.kr/product/226840555_1_1686560346_w292.jpg',
				},
			],
		},
		chart_data: {
			// 차트의 데이터
			product_tag: '의류 / 신발', // 차트를 조회할 때 사용한 카테고리
			data: [
				{
					name: '4월',
					'평균 거래가': 100000,
				},
				{
					name: '5월',
					'평균 거래가': 120000,
				},
				{
					name: '6월',
					'평균 거래가': 400000,
				},
				{
					name: '7월',
					'평균 거래가': 300000,
				},
				{
					name: '최근',
					'평균 거래가': 250000,
				},
			],
		},
		recommended_product: [
			// 추천 상품 혹은 연관된 상품들
			{
				product_id: '270',
				product_name: '스타벅스 아메리카노 기프티콘',
				product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노', // 상품 상세 내용(컨텐츠)
				product_price: 15000,
				product_place: '천호동',
				product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				product_id: '420',
				product_name: '스타벅스 아메리카노 기프티콘',
				product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
				product_price: 15000,
				product_place: '천호동',
				product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				product_id: '520',
				product_name: '스타벅스 아메리카노 기프티콘',
				product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
				product_price: 15000,
				product_place: '천호동',
				product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				product_id: '18',
				product_name: '스타벅스 아메리카노 기프티콘',
				product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
				product_price: 15000,
				product_place: '천호동',
				product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
				isLike: true,
			},
			{
				product_id: '25',
				product_name: '스타벅스 아메리카노 기프티콘',
				product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
				product_price: 15000,
				product_place: '천호동',
				product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				product_id: '11',
				product_name: '스타벅스 아메리카노 기프티콘',
				product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
				product_price: 15000,
				product_place: '천호동',
				product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				product_id: '41',
				product_name: '스타벅스 아메리카노 기프티콘',
				product_content: '한 번만 쓴 기프티콘 판매합니다 스타벅스 아메리카노',
				product_price: 15000,
				product_place: '천호동',
				product_create_at: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_main_img_url:
					'https://media.bunjang.co.kr/product/229963877_1_1689343314_w292.jpg', // 상품의 대표 이미지 주소
				product_like: 10, // 상품의 좋아요 갯수
				product_chat_count: 21, // 상품의 채팅 갯수
				isLike: false,
			},
		],
	},
}

export default detailPageMock
