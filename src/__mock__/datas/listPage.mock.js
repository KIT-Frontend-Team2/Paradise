const listPageMock = {
	allProductList: {
		status: 200,
		message: 'success',
		total: 117,
		data: [
			{
				productId: '1',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '2',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '3',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매완료',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '4',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '5',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '6',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '7',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '8',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매완료',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
		],
	},

	freeProductList: {
		status: 200,
		message: 'success',
		total: 117,
		data: [
			{
				productId: '9',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '10',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '11',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '12',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '13',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '14',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '15',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '16',
				productTitle: '아메리카노',
				productPrice: 0,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: false, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
		],
	},

	sellProductList: {
		status: 200,
		message: 'success',
		total: 120,
		data: [
			{
				productId: '17',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '18',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '19',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '20',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '21',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '22',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '23',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
			{
				productId: '24',
				productTitle: '아메리카노',
				productPrice: 20000,
				product_img:
					'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
				product_create_at: '2023-04-14T13:59:49.690Z',
				product_update_at: '2023-04-14T13:59:49.690Z',
				product_state: '판매중',
				product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
				product_like: 2, // 상품의 좋아요 갯수
				product_chat_count: 5, // 상품의 채팅 갯수
				product_content:
					'정품이구요 바닥면 모서리에 약간 까짐 외에 상태 좋은 제품입니다!', // 상품 상세 내용(컨텐츠)
				product_category: true, // 판매상품인지 중고상품인지
				isLike: false, // 좋아요를 눌렀는지 확인
			},
		],
	},
}

export default listPageMock
