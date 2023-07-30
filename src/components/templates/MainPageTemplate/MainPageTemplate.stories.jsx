import MainPageMock from '../../../__mock__/datas/mainPage.mock'
import MainLogo from '../../../assets/images/main-logo.png'
import MainPageTemplate from './MainPageTemplate'

export default {
	title: 'Template/MainPageTemplate',
	tags: ['autodocs'],
	component: MainPageTemplate,
}

const Template = args => <MainPageTemplate {...args} />

export const Controls = Template.bind({})

Controls.args = {
	productInfo: MainPageMock.data,
	mainLogo: [
		{
			img_url: MainLogo,
			id: 1,
		},
		{
			img_url: MainLogo,
			id: 2,
		},
		{
			img_url: MainLogo,
			id: 3,
		},
	],
}
