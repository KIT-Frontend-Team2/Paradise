import Pagination from './Pagination'

export default {
	title: 'Molecules/Pagination',
	tags: ['autodocs'],
	component: Pagination,
	argTypes: {
		page: { control: { type: 'number' } },
		item_length: { control: { type: 'number' } },
		total: { control: { type: 'number' } },
	},
	parameters: {
		reactRouter: {
			routePath: '/list/sell',
		},
	},
}

const Template = args => (
	<Pagination
		page={args.page}
		total={args.total}
		item_length={args.item_length}
	/>
)

export const Controls = Template.bind({})

Controls.args = {
	page: 1,
	item_length: 30,
	total: 100,
}
