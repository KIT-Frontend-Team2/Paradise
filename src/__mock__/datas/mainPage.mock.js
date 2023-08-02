const mainPageMock = {
	status: 200,
	message: 'success',
	data: {
		region: '서울 강남구 역삼동',
		usedProduct: [
			{
				idx: 310,
				title: '고양이 사진 팝니다',
				price: 100000000000000000,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
				createdAt: '2023-08-02T00:11:05.000Z',
				liked: 1,
				status: '판매중',
				ProductImages: [
					{
						imgUrl:
							'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065031_1652337370806_0.jpg',
					},
					{
						imgUrl:
							'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065046_AdobeStock_480677190-1024x684%20-%20%C3%AB%C2%B3%C2%B5%C3%AC%C2%82%C2%AC%C3%AB%C2%B3%C2%B8.jpeg',
					},
					{
						imgUrl:
							'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065051_Cute_Kitten_Eyes-Animal_HD_Wallpaper_2560x1600.jpg',
					},
					{
						imgUrl:
							'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065103_ezgif.com-gif-maker-4.gif',
					},
				],
				ProductsTags: [
					{
						idx: 989,
						Tag: {
							tag: '사진',
						},
					},
					{
						idx: 988,
						Tag: {
							tag: '고양이',
						},
					},
					{
						idx: 990,
						Tag: {
							tag: '무료나눔?',
						},
					},
				],
			},
			{
				idx: 302,
				title: '줍줍이',
				price: 123456,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689514126212_%C3%AC%C2%BA%C2%90%C3%AB%C2%A6%C2%AD%C3%AD%C2%84%C2%B0%C3%AC%C2%B5%C2%9C%C3%AC%C2%A2%C2%85.png',
				createdAt: '2023-07-16T13:28:46.000Z',
				liked: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 976,
						Tag: {
							tag: '여성의류',
						},
					},
				],
			},
			{
				idx: 299,
				title: '중고물품',
				price: 5000,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689430256437_0.jpg',
				createdAt: '2023-07-15T14:10:56.000Z',
				liked: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 966,
						Tag: {
							tag: '게임·취미',
						},
					},
				],
			},
			{
				idx: 292,
				title: 'ㅇㅎ',
				price: 11111111,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686578023419_KakaoTalk_20221205_173140689_07.jpg',
				createdAt: '2023-06-12T13:53:43.000Z',
				liked: 0,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 948,
						Tag: {
							tag: '테스트',
						},
					},
				],
			},
			{
				idx: 289,
				title: '테스트2222',
				price: 1000,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686399909558_20230603_183457.jpg',
				createdAt: '2023-06-10T12:25:27.000Z',
				liked: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 960,
						Tag: {
							tag: '유아동',
						},
					},
				],
			},
			{
				idx: 283,
				title: 'test',
				price: 1234,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686202946368_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B52.jpeg',
				createdAt: '2023-06-08T05:42:26.000Z',
				liked: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 935,
						Tag: {
							tag: 'test',
						},
					},
				],
			},
			{
				idx: 282,
				title: '도리도리',
				price: 666666,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686148574893_33333455_376457432874896_1473856510529372160_n-5b17d7221d640400362604e9.jpg',
				createdAt: '2023-06-07T14:36:15.000Z',
				liked: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 930,
						Tag: {
							tag: '테스트',
						},
					},
				],
			},
			{
				idx: 279,
				title: '상품 상품',
				price: 3000,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686146471285_testImage5.jpg',
				createdAt: '2023-06-07T14:01:11.000Z',
				liked: 1,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 918,
						Tag: {
							tag: '상품',
						},
					},
				],
			},
		],
		freeProduct: [
			{
				idx: 304,
				title: '아이콘 판매',
				price: 0,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689861782115_right_arrow.png',
				createdAt: '2023-07-20T14:03:02.000Z',
				liked: 0,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 981,
						Tag: {
							tag: '66ㅑ',
						},
					},
					{
						idx: 980,
						Tag: {
							tag: '디지털기기',
						},
					},
				],
			},
			{
				idx: 297,
				title: '321',
				price: 0,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1687604539624_%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BA%202023-06-23%20%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AE%207.02.09.png',
				createdAt: '2023-06-24T11:02:19.000Z',
				liked: 0,
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
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1687001613678_cat_character.png',
				createdAt: '2023-06-17T11:33:33.000Z',
				liked: 0,
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
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686321273697_7576de8e-e4f6-4827-9f17-cfefe4be052f.jpg',
				createdAt: '2023-06-09T14:34:33.000Z',
				liked: 1,
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
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1686224395976_21932-9-red-high-heel-shoes.png',
				createdAt: '2023-06-08T11:39:56.000Z',
				liked: 0,
				status: '판매중',
				ProductImages: [],
				ProductsTags: [
					{
						idx: 941,
						Tag: {
							tag: '하이힐',
						},
					},
					{
						idx: 940,
						Tag: {
							tag: '테스트',
						},
					},
				],
			},
			{
				idx: 259,
				title: 'ㅁㅇㄹ',
				price: 0,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685985856564_%C3%A1%C2%84%C2%83%C3%A1%C2%85%C2%A9%C3%A1%C2%86%C2%BC%C3%A1%C2%84%C2%80%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B53.png',
				createdAt: '2023-06-05T17:24:16.000Z',
				liked: 0,
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
						idx: 864,
						Tag: {
							tag: '치킨치ㅣㄴ치킨',
						},
					},
					{
						idx: 863,
						Tag: {
							tag: 'ㄹㅁㅇㄹ',
						},
					},
				],
			},
			{
				idx: 111,
				title: '식물화분나눔',
				price: 0,
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685545582285_vadim-kaipov-8ZELrodSvTc-unsplash.jpg',
				createdAt: '2023-05-31T15:06:22.000Z',
				liked: 0,
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
				img_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1685545519019_oven1.jpg',
				createdAt: '2023-05-31T15:05:19.000Z',
				liked: 0,
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
		],
	},
}

export default mainPageMock
