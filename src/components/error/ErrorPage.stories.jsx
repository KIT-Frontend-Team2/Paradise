import ErrorPage from '../pages/ErrorPage'

export default {
	title: 'Page/ErrorPage',
	tags: ['autodocs'],
	component: ErrorPage,
	argTypes: {
		error: { control: { type: 'text' } },
		errorMessage: { control: { type: 'text' } },
		errorImg: { control: { type: 'text' } },
	},
}

const Template = args => <ErrorPage {...args} />
export const Controls = Template.bind({})

Controls.args = {}
