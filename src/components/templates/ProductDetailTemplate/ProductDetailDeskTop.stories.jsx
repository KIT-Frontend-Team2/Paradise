import { ThemeProvider } from 'styled-components'

import detailPageMock from '../../../__mock__/datas/detailPage.mock'
import theme from '../../../styles/theme'
import ProductDetailDeskTop from './ProductDetailDeskTop'

export default {
	title: 'Template/ProductDetailDeskTop',
	tags: ['autodocs'],
	component: ProductDetailDeskTop,
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

const Template = args => <ProductDetailDeskTop productInfo={args.productInfo} />

export const Controls = Template.bind({})

Controls.args = {
	productInfo: detailPageMock.data,
}
