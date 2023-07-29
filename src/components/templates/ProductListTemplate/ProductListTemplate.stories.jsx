import searchPageMock from '../../../__mock__/datas/searchPage.mock'
import ProductListTemplate from './ProductListTemplate'

export default {
	title: 'Template/ProductListTemplate',
	tags: ['autodocs'],
	component: ProductListTemplate,
}

const Template = args => <ProductListTemplate {...args} />

export const Controls = Template.bind({})

Controls.args = {
	page: 2,
	total: 130,
	filter: 'sell',
	products: searchPageMock.data,
}
