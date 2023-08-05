const mycashPageMock = {
	status: 200,
	message: 'success',
	total: 200,
	data: {
		user_info: {
			user_id: 'nature',
			user_nick_name: '네이처',
			user_total_product: 8,
		},
		user_product_list: [
			{
				sort_type: 'catagory',
				title: '카테고리',
				contents: {
					all: [
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
							product_content: '전체내역입니다.', // 상품 상세 내용(컨텐츠)
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
							product_content: '전체내역입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '22',
							productTitle: '라뗴',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '전체내역입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '23',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매완료',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '전체내역입니다', // 상품 상세 내용(컨텐츠)
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
							product_state: '판매완료',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '전체내역입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '25',
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
							product_content: '전체내역입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],

					free: [
						{
							productId: '26',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '나눔상품입니다. ', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '27',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '나눔상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '28',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '나눔상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '29',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '나눔상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '30',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '나눔상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '20',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '나눔상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],

					sale: [
						{
							productId: '31',
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
							product_content: '중고 판매 상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '32',
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
							product_content: '중고 판매 상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '33',
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
							product_content: '중고 판매 상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '34',
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
							product_content: '중고 판매 상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '35',
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
							product_content: '중고 판매 상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '36',
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
							product_content: '중고 판매 상품입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
				},
			},

			{
				sort_type: 'date',
				title: '달',
				contents: {
					threeMonths: [
						{
							productId: '37',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '3개월 ', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '38',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '3개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '39',
							productTitle: '라떼',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '3개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '40',
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
							product_content: '3개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '41',
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
							product_content: '3개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '42',
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
							product_content: '3개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
					SixMonths: [
						{
							productId: '43',
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
							product_content: '6개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '44',
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
							product_content: '6개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '45',
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
							product_content: '6개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '46',
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
							product_content: '6개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '47',
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
							product_content: '6개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '48',
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
							product_content: '6개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
					Ninemonths: [
						{
							productId: '49',
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
							product_content: '9개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '50',
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
							product_content: '9개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '51',
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
							product_content: '9개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '52',
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
							product_content: '9개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '53',
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
							product_content: '9개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '54',
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
							product_content: '9개월', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
					year: [
						{
							productId: '55',
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
							product_content: '1년', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '56',
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
							product_content: '1년', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '57',
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
							product_content: '1년', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '58',
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
							product_content: '1년', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '59',
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
							product_content: '1년', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '60',
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
							product_content: '1년', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
				},
			},

			{
				sort_type: 'state',
				title: '상태',
				contents: {
					all: [
						{
							productId: '61',
							productTitle: '스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '총내역필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '62',
							productTitle: '스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '총내역필터입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '63',
							productTitle: '스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '총내역필터입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '64',
							productTitle: '스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '총내역필터입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '65',
							productTitle: '스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '총내역필터입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '66',
							productTitle: '스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '총내역필터입니다', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
					Salesdetails: [
						{
							productId: '68',
							productTitle: '판매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '판매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '69',
							productTitle: '판매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '판매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '70',
							productTitle: '판매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '판매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '71',
							productTitle: '판매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '판매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '72',
							productTitle: '판매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '판매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '73',
							productTitle: '판매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '판매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
					Purchasedetails: [
						{
							productId: '74',
							productTitle: '구매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '구매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '75',
							productTitle: '구매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '구매내역 필터입니다..', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '76',
							productTitle: '구매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '구매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '77',
							productTitle: '구매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '구매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '78',
							productTitle: '구매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '구매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
						{
							productId: '79',
							productTitle: '구매스무디',
							productPrice: 20000,
							product_img:
								'https://media.bunjang.co.kr/product/215187391_1_1676610122_w856.jpg',
							product_create_at: '2023-04-14T13:59:49.690Z',
							product_update_at: '2023-04-14T13:59:49.690Z',
							product_state: '판매중',
							product_place: '서울시 강남구 역삼동', // 상품이 올라온 장소
							product_like: 2, // 상품의 좋아요 갯수
							product_chat_count: 5, // 상품의 채팅 갯수
							product_content: '구매내역 필터입니다.', // 상품 상세 내용(컨텐츠)
							product_category: true, // 판매상품인지 중고상품인지
							isLike: false, // 좋아요를 눌렀는지 확인
						},
					],
				},
			},
		],
	},
}

export default mycashPageMock
