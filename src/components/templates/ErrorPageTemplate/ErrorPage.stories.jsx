import ErrorPageTemplate from "./ErrorPageTemplate";

export default {
	title: 'Template/ErrorPageTemplate',
	tags: ['autodocs'],
	component: ErrorPageTemplate,
	argTypes: {
		error: { control: { type: 'text' } },
		errorMessage: { control: { type: 'text' } },
		errorImg: { control: { type: 'text' } },
	},
}

const Template = args => <ErrorPageTemplate {...args} />
export const Controls = Template.bind({})

Controls.args = {}
