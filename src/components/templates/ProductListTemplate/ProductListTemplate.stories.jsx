import listPageMock from '../../../__mock__/datas/listPage.mock'
import ProductListTemplate from './ProductListTemplate'

export default {
	title: 'Template/ProductListTemplate',
	tags: ['autodocs'],
	component: ProductListTemplate,
}

const Template = args => <ProductListTemplate {...args} />

export const Controls = Template.bind({})

Controls.args = {
	page: 1,
	total: 9,
	filter: 'free',
	products: listPageMock.sellProductList.data,
}
