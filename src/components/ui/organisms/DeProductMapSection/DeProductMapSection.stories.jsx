import DeProductMapSection from './DeProductMapSection'

export default {
	title: 'Organisms/DeProductMapSection',
	tags: ['autodocs'],
	component: DeProductMapSection,
}

const Template = args => <DeProductMapSection rightTitle={args.rightTitle} />

export const Controls = Template.bind({})

Controls.args = {
	rightTitle: '서울시 강남구 역삼동',
}
