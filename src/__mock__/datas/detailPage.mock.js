const detailPageMock = {
	status: 200,
	message: 'success',
	data: {
		searchProduct: {
			idx: 310,
			title: '고양이 사진 팝니다',
			price: 100000000000000000,
			description: '고양이 사진 팝니다 사기 아니에요 ',
			category: false,
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
			createdAt: '2023-08-02T00:11:05.000Z',
			status: '판매중',
			user_idx: 71,
			region: '서울 강남구 역삼동',
			liked: 1,
			ProductImages: [
				{
					img_url:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065031_1652337370806_0.jpg',
				},
				{
					img_url:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065046_AdobeStock_480677190-1024x684%20-%20%C3%AB%C2%B3%C2%B5%C3%AC%C2%82%C2%AC%C3%AB%C2%B3%C2%B8.jpeg',
				},
				{
					img_url:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065051_Cute_Kitten_Eyes-Animal_HD_Wallpaper_2560x1600.jpg',
				},
				{
					img_url:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065103_ezgif.com-gif-maker-4.gif',
				},
			],
			ProductsTags: [
				{
					idx: 988,
					Tag: {
						tag: '고양이',
					},
				},
				{
					idx: 989,
					Tag: {
						tag: '사진',
					},
				},
				{
					idx: 990,
					Tag: {
						tag: '무료나눔?',
					},
				},
			],
			User: {
				nick_name: '집에가고싶은고양이',
				profile_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/profile/1689666175647_2376906.jpg',
				token: 'bfc79403-301c-4716-9ccd-4ddd32044e3f',
				Ondo: {
					ondo: 68,
				},
			},
			PayLists: [],
		},
		relatedProduct: {
			product: [
				{
					idx: 310,
					title: '고양이 사진 팝니다',
					price: 100000000000000000,
					description: '고양이 사진 팝니다 사기 아니에요 ',
					img_url:
						'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1690935065020_32900714436_d3d6519433_b.jpg',
					createdAt: '2023-08-02T00:11:05.000Z',
					liked: 1,
					likeCount: 1,
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
							idx: 988,
							Tag: {
								tag: '고양이',
							},
						},
						{
							idx: 989,
							Tag: {
								tag: '사진',
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
			],
			pagination: {
				curPage: 1,
				startPage: 1,
				endPage: 1,
				totalPage: 1,
				count: 1,
				page_size: 20,
				totalSet: 1,
			},
		},
		isSeller: true,
		chat: [],
	},
}

export default detailPageMock
