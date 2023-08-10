import ReviewCard from './ReviewCard'

export default {
	title: 'Molecules/ReviewCard',
	tags: ['autodocs'],
	component: ReviewCard,
	argTypes: {},
}

const Template = () => <ReviewCard />

export const Controls = Template.bind({})

Controls.args = {
	review_info: {
		Product: {
			User: {
				nick_name: '집에가고싶은고양이',
				profile_url:
					'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/profile/1689666175647_2376906.jpg',
				token: 'bfc79403-301c-4716-9ccd-4ddd32044e3f',
				Ondo: { ondo: 70 },
			},
			idx: 301,
			img_url:
				'https://dangimageserver.s3.ap-northeast-2.amazonaws.com/img/user/products/1689513839458_2376906.jpg',
			price: 30000,
			title: '주람님팬이에요',
		},
		Review: {
			content: 'asdasd',
			img_url: null,
			ondo: 100,
			title: 'asd',
			User: {
				nick_name: 'C강의장녹화용',
				profile_url: null,
				token: 'dfdef66a-d438-48e7-b109-1438085d3233',
			},
			ReviewImages: [],
		},
		created_at: '2023-07-23T13:10:15.000Z',
		idx: 86,
	},
}
