const searchUserPageMock = {
	status: 200,
	message: 'success',
	total: 62,
	data: [
		{
			productId: '1',
			productTitle: '아메리카노',
			productPrice: 0,
			product_img:
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
			productId: '2',
			productTitle: '아메리카노',
			productPrice: 0,
			product_img:
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
			productId: '3',
			productTitle: '아메리카노',
			productPrice: 0,
			product_img:
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
			productId: '4',
			productTitle: '아메리카노',
			productPrice: 0,
			product_img:
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
			productId: '5',
			productTitle: '아메리카노',
			productPrice: 0,
			product_img:
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
			productId: '6',
			productTitle: '아메리카노',
			productPrice: 0,
			product_img:
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
			productId: '7',
			productTitle: '아메리카노',
			productPrice: 0,
			product_img:
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
				'https://lh5.googleusercontent.com/p/AF1QipN2Su1ydeOzl0D-Ivl5xnxNuzbq2SzVuAU9Y4Ap=w173-h175-n-k-no',
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
}

export default searchUserPageMock
