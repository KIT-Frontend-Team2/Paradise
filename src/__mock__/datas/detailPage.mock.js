const detailPageMock = {
	status: 200,
	message: 'success',
	data: {
		isBuyer: false, // 조회한 사람이 구매자인지 판매자인지
		isLike: false, // 상품을 좋아요 했는지 안했는지
		is_free_product: false, // 상품이 나눔 여부인지
		product_id: 715, // 상품의 아이디
		product_title: '바오바오 (링숄더백)', // 상품의 이름
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
			'의류/신발',
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
					id: '905',
					name: '스피커 팝니다.',
					img: 'https://media.bunjang.co.kr/product/230484040_1_1691897500_w856.jpg', // 상품의 대표 이미지 주소
				},
				{
					id: '906',
					name: '타월 원피스',
					img: 'https://media.bunjang.co.kr/product/232309588_1_1691322456_w856.jpg',
				},
				{
					id: '907',
					name: '검은색 원피스 나눔합니다.',
					img: 'https://media.bunjang.co.kr/product/232913741_1_1691822779_w856.jpg',
				},
				{
					id: '908',
					name: '남성용 자켓',
					img: 'https://media.bunjang.co.kr/product/231109606_1_1690293719_w856.jpg',
				},
				{
					id: '909',
					name: '바람막이 점퍼',
					img: 'https://media.bunjang.co.kr/product/229313542_1_1690981707_w856.jpg',
				},
				{
					id: '910',
					name: '블랙 원피스',
					img: 'https://media.bunjang.co.kr/product/232756360_1_1691773079_w856.jpg',
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
			{
				idx: 791,
				title: '잇미샤 핑크 니트 n8253',
				price: 15400, // 상품 상세 내용(컨텐츠)
				createdAt: '2023-08-13T16:22:45.000Z', // 상품을 업로드한 시간
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1691943765582_image.png', // 상품의 대표 이미지 주소
				likeCount: 10, // 상품의 좋아요 갯수
				chatCount: 0, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				idx: 782,
				title: '새제품) 라벨르블랑 릴리원피스',
				price: 150000, // 상품 상세 내용(컨텐츠)
				createdAt: '2023-08-13T16:10:28.000Z', // 상품을 업로드한 시간
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1691943028076_image.png', // 상품의 대표 이미지 주소
				likeCount: 4, // 상품의 좋아요 갯수
				chatCount: 5, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				idx: 790,
				title: '페미니크 스트라이프 원피스',
				price: 0, // 상품 상세 내용(컨텐츠)
				createdAt: '2023-08-13T16:20:20.000Z', // 상품을 업로드한 시간
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1691943619956_image.png', // 상품의 대표 이미지 주소
				likeCount: 10, // 상품의 좋아요 갯수
				chatCount: 0, // 상품의 채팅 갯수
				isLike: true,
			},
			{
				idx: 781,
				title: '모코블링 크롭셔츠 2개가격소라,흰색',
				price: 8000, // 상품 상세 내용(컨텐츠)
				createdAt: '2023-08-13T16:08:29.000Z', // 상품을 업로드한 시간
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1691942909264_image.png', // 상품의 대표 이미지 주소
				likeCount: 6, // 상품의 좋아요 갯수
				chatCount: 0, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				idx: 783,
				title: '어텀 린넨 후드티',
				price: 0, // 상품 상세 내용(컨텐츠)
				createdAt: '2023-08-13T16:13:50.000Z', // 상품을 업로드한 시간
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1691943230597_image.png', // 상품의 대표 이미지 주소
				likeCount: 10, // 상품의 좋아요 갯수
				chatCount: 0, // 상품의 채팅 갯수
				isLike: false,
			},
			{
				idx: 780,
				title: '마이바니 보트넥티',
				price: 8000, // 상품 상세 내용(컨텐츠)
				createdAt: '2023-04-14T13:59:49.690Z', // 상품을 업로드한 시간
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1691942789134_image.png', // 상품의 대표 이미지 주소
				likeCount: 10, // 상품의 좋아요 갯수
				chatCount: 0, // 상품의 채팅 갯수
				isLike: false,
			},
		],
	},
}

export default detailPageMock
