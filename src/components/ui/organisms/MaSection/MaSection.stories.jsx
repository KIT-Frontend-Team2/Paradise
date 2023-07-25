import MaSection from './MaSection'

export default {
	title: 'Organisms/MaSection',
	tags: ['autodocs'],
	component: MaSection,
	argTypes: {
		products: { control: 'array' },
		leftTitle: { control: 'text' },
		link: { action: '클릭' },
	},
}

const Template = args => (
	<MaSection
		products={args.products}
		leftTitle={args.leftTitle}
		link={args.link}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	leftTitle: '우리 동네 중고 상품',
	products: [
		{
			productId: '20',
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
			productId: '20',
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
			productId: '20',
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
			productId: '20',
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
			productId: '20',
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
			productId: '20',
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
			productId: '20',
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
			productId: '20',
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
	link: () => console.log('action'),
}
