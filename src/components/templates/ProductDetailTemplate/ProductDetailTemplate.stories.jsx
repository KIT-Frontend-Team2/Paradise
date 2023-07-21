import { ThemeProvider } from 'styled-components'

import detailPageMock from '../../../__mock__/datas/detailPage.mock'
import theme from '../../../styles/theme'
import ProductDetailTemplate from './ProductDetailTemplate'

export default {
	title: 'Template/ProductDetailTemplate',
	tags: ['autodocs'],
	component: ProductDetailTemplate,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

const Template = args => (
	<ProductDetailTemplate productInfo={args.productInfo} />
)

export const Controls = Template.bind({})

Controls.args = {
	productInfo: detailPageMock.data,
}
