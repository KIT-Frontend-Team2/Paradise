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
			url: 'https://files.itworld.co.kr/2020/08_02/how-to-convert-webp-images-to-jpeg-or-png-paint.png',
			description: '사이트 소개',
		},
		{
			url: 'https://files.itworld.co.kr/2020/08_02/how-to-convert-webp-images-to-jpeg-or-png-online_thumb.png',
			description: '사이트 소개',
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
				url: 'https://files.itworld.co.kr/2020/08_02/how-to-convert-webp-images-to-jpeg-or-png-paint.png',
				description: '사이트 소개',
			},
			{
				url: 'https://files.itworld.co.kr/2020/08_02/how-to-convert-webp-images-to-jpeg-or-png-online_thumb.png',
				description: '사이트 소개',
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
				url: 'https://files.itworld.co.kr/2020/08_02/how-to-convert-webp-images-to-jpeg-or-png-paint.png',
				description: '사이트 소개',
			},
			{
				url: 'https://files.itworld.co.kr/2020/08_02/how-to-convert-webp-images-to-jpeg-or-png-online_thumb.png',
				description: '사이트 소개',
			},
		],
		autoplay: { delay: 2500 },
		isAuto: false,
	},
}
