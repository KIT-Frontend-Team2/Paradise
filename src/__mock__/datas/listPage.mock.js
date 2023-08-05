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
				idx: 304,
				title: '아이콘 판매',
				price: 0,
				description: 'ㄹㄹ',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689861782115_right_arrow.png',
				createdAt: '2023-07-20T14:03:02.000Z',
				liked: 0,
				likeCount: 0,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 980,
						Tag: {
							tag: '디지털기기',
						},
					},
					{
						idx: 981,
						Tag: {
							tag: '66ㅑ',
						},
					},
				],
			},
			{
				idx: 297,
				title: '321',
				price: 0,
				description: '321321',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1687604539624_%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BA%202023-06-23%20%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AE%207.02.09.png',
				createdAt: '2023-06-24T11:02:19.000Z',
				liked: 0,
				likeCount: 2,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 962,
						Tag: {
							tag: '321321',
						},
					},
				],
			},
			{
				idx: 293,
				title: '테스트',
				price: 159000,
				description: '고양이가 집을 나선다',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1687001613678_cat_character.png',
				createdAt: '2023-06-17T11:33:33.000Z',
				liked: 0,
				likeCount: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 949,
						Tag: {
							tag: '테스트',
						},
					},
				],
			},
			{
				idx: 286,
				title: '채팅 테스트',
				price: 0,
				description: '채팅 테스트',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686321273697_7576de8e-e4f6-4827-9f17-cfefe4be052f.jpg',
				createdAt: '2023-06-09T14:34:33.000Z',
				liked: 1,
				likeCount: 4,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 942,
						Tag: {
							tag: '채팅 테스트',
						},
					},
				],
			},
			{
				idx: 285,
				title: '만두만두만두만두만두만두만두만두만두만',
				price: 0,
				description:
					'만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n\r\n만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n만두만두만두만두만두만\r\n\r\n만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n\r\n만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n만두만두만두만두만두만\r\n\r\n만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n\r\n만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n만두만두만두만두만두만만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n\r\n만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n만두만두만두만두만두만만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n\r\n만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두만두\r\n\r\n만두만두만두만두만두만',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686224395976_21932-9-red-high-heel-shoes.png',
				createdAt: '2023-06-08T11:39:56.000Z',
				liked: 0,
				likeCount: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 940,
						Tag: {
							tag: '테스트',
						},
					},
					{
						idx: 941,
						Tag: {
							tag: '하이힐',
						},
					},
				],
			},
			{
				idx: 259,
				title: 'ㅁㅇㄹ',
				price: 0,
				description: 'ㅁㅇㄴㄹ',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685985856564_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B53.png',
				createdAt: '2023-06-05T17:24:16.000Z',
				liked: 0,
				likeCount: 2,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 862,
						Tag: {
							tag: 'ㄴ',
						},
					},
					{
						idx: 863,
						Tag: {
							tag: 'ㄹㅁㅇㄹ',
						},
					},
					{
						idx: 864,
						Tag: {
							tag: '치킨치ㅣㄴ치킨',
						},
					},
				],
			},
			{
				idx: 111,
				title: '식물화분나눔',
				price: 0,
				description:
					'식집사님 구합니다 ^^\r\n너무많아서 분양보내려구요\r\n까다로운 애들이라 잘 부탁드립니다.\r\n선착순 10명입니다!!(채팅순)',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685545582285_vadim-kaipov-8ZELrodSvTc-unsplash.jpg',
				createdAt: '2023-05-31T15:06:22.000Z',
				liked: 0,
				likeCount: 5,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 415,
						Tag: {
							tag: '식물',
						},
					},
					{
						idx: 416,
						Tag: {
							tag: '나눔',
						},
					},
				],
			},
			{
				idx: 110,
				title: '오븐 나눔합니다.',
				price: 0,
				description:
					'해외로 이사가게 되어서, 무료 나눔합니다.\r\n*** 직접 가지러 오셔야합니다!!!\r\n\r\n아무래도 5년정도 사용해서 사용감은 좀 있습니다.\r\n그래도 기능에는 전혀 문제 없습니다 :)\r\n',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685545519019_oven1.jpg',
				createdAt: '2023-05-31T15:05:19.000Z',
				liked: 0,
				likeCount: 4,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 413,
						Tag: {
							tag: '오븐',
						},
					},
				],
			},
			{
				idx: 107,
				title: '동영님 여기 상품 !',
				price: 30000,
				description: '채팅용 테스트 상품입니다~!',
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685544992849_testImage3.png',
				createdAt: '2023-05-31T14:56:33.000Z',
				liked: 0,
				likeCount: 8,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 407,
						Tag: {
							tag: '테스트',
						},
					},
					{
						idx: 408,
						Tag: {
							tag: ' 가계부',
						},
					},
				],
			},
		],
	},
}

export default listPageMock
