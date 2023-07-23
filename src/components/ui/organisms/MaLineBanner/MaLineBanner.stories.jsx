import MaLineBanner from './MaLineBanner'

export default {
	title: 'Organisms/MaLineBanner',
	tags: ['autodocs'],
	component: MaLineBanner,
	argTypes: {
		height: { control: 'array' },
		title: { control: 'text' },
		importText: { control: 'text' },
		subTitle: { control: 'text' },
		label: { control: 'text' },
		link: { action: '클릭' },
	},
}

const Template = args => (
	<MaLineBanner
		height={args.height}
		title={args.title}
		importText={args.importText}
		link={args.link}
		label={args.label}
		subTitle={args.subTitle}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	height: 140,
	title: '수수료 없는 무료 중고거래, 나눔 사이트',
	importText: 'Paradise',
	subTitle: '집에 혼자있는 중고제품 팔면 돈이 된다?',
	label: '판매하러 가기',
	link: () => console.log('눌러짐'),
}
