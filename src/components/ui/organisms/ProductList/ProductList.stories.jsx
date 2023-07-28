import { number } from 'prop-types'

import searchPageMock from '../../../../__mock__/datas/searchPage.mock'
import ProductList from './ProductList'

export default {
	title: 'Organisms/ProductList',
	tags: ['autodocs'],
	component: ProductList,
	argTypes: {
		products: { control: 'array' },
		size: { control: number },
	},
}

const Template = args => <ProductList {...args} />

export const Controls = Template.bind({})

Controls.args = {
	size: 280,
	products: searchPageMock.data,
}
