import MainLogo from 'assets/images/main-logo.png'
import styled from 'styled-components'

import SSlideBanner from './SSlideBanner'

export default {
	title: 'Molecules/SSlideBanner',
	tags: ['autodocs'],
	component: SSlideBanner,
	decorators: [
		Story => (
			<S.Container>
				<Story />
			</S.Container>
		),
	],
	argTypes: {
		Images: { control: 'object' },
		isAuto: { control: 'boolean' },
		autoplay: { control: 'object' },
		loop: { control: 'boolean' },
	},
}

const S = {}

S.Container = styled.div`
	width: 700px;
	height: 400px;
`

const Template = args => <SSlideBanner {...args} />

export const Controls = Template.bind({})

Controls.args = {
	loop: true,
	Images: [
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
	autoplay: { delay: 2500 },
	isAuto: false,
}

export const 자동슬라이드 = {
	args: {
		loop: true,
		Images: [
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
		autoplay: { delay: 2500 },
		isAuto: true,
	},
}

export const 수동슬라이드 = {
	args: {
		loop: true,
		Images: [
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
		autoplay: { delay: 2500 },
		isAuto: false,
	},
}
