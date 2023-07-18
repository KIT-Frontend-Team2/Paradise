import DeUserCard from './DeUserCard'

export default {
	title: 'Molecules/DeUserCard',
	tags: ['autodocs'],
	component: DeUserCard,
	argTypes: {
		imgProfile: { control: 'text' },
		size: { control: { type: 'number' } },
		UserName: { control: 'text' },
		ProductCount: { control: { type: 'number' } },
		UserTemplate: { control: { type: 'number' } },
	},
}

const Template = args => (
	<DeUserCard
		imgProfile={args.imgProfile}
		size={args.size}
		userName={args.userName}
		productCount={args.productCount}
		userTemplate={args.userTemplate}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	imgProfile:
		'https://wimg.mk.co.kr/news/cms/202305/02/news-p.v1.20230502.ed525ea29d424555a1bffdeefca035d1_P1.jpg',
	size: 40,
	userName: '네이쳐',
	productCount: 41,
	userTemplate: 39.2,
}
