import productCarouselMock from '../../../../__mock__/datas/productCarousel.mock'
import SProductCarousel from './SProductCarousel'

export default {
	title: 'Molecules/SProductCarousel',
	tags: ['autodocs'],
	component: SProductCarousel,
}

const Template = args => <SProductCarousel products={args.product} />

export const Controls = Template.bind({})

Controls.args = {
	product: productCarouselMock,
}
