import lastBg from 'assets/images/section-bg-last-min.jpeg'
import { styled } from 'styled-components'
import { fadeOut, pulsate, shine } from 'styles/keyframes'

export const Section = styled.div`
	box-sizing: border-box;

	font-size: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '16px' : '14px'};

	&.section1 {
		padding: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop || theme.isTablet
				? '6em 0'
				: '6em 0 0'};
		background-color: #e0eae7;
		min-height: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop || theme.isTablet
				? '100vh'
				: ''};
		display: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop ? 'flex' : 'block'};
		position: relative;
	}

	&.section2 {
		padding: 6em 0;
		background-color: ${({ theme }) => theme.PALETTE.gray[100]};

		ul {
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: ${({ theme }) =>
				theme.isDesktop || theme.isTabletAndLaptop ? 'row' : 'column'};
			gap: 1em;

			display: grid;
			grid-template-columns: ${({ theme }) =>
				theme.isDesktop || theme.isTabletAndLaptop
					? 'repeat(4, 1fr)'
					: `${
							theme.isTablet || theme.isMobileAndTablet
								? 'repeat(2, 1fr)'
								: 'repeat(1, 1fr)'
					  }`};
			gap: 1em;

			li {
				display: flex;
				flex: 1;
				width: 100%;
				position: relative;
				padding: 30px;
				line-height: 2;
				list-style: none;
				text-align: left;
				background-color: #fff;
				border-radius: 10px;
				box-sizing: border-box;
				gap: ${({ theme }) =>
					theme.isDesktop || theme.isTabletAndLaptop ? '12px' : '2em'};
				flex-direction: ${({ theme }) =>
					theme.isDesktop || theme.isTabletAndLaptop ? 'column' : 'row'};
				align-items: ${({ theme }) =>
					theme.isDesktop || theme.isTabletAndLaptop ? 'flex-start' : 'center'};
				& > div {
					display: ${({ theme }) =>
						theme.isDesktop || theme.isTabletAndLaptop ? 'block' : 'flex'};
				}
			}
		}
	}

	&.section3 {
		position: relative;
		min-height: ${({ type }) => (type === 'landing' ? '100vh' : '110vh')};

		&:after {
			content: '';
			position: absolute;
			max-width: 1300px;
			margin: 0 auto;
			inset: 0;
			background-image: url(${lastBg});
			background-size: 110%;
			background-repeat: no-repeat;
			background-position: ${({ theme }) =>
				theme.isDesktop || theme.isTabletAndLaptop
					? 'center -30%'
					: 'center bottom'};
		}

		& > div {
			position: absolute;
			inset: 0;
			z-index: 11;
			min-height: 100vh;
			padding: ${({ theme }) =>
				theme.isDesktop || theme.isTabletAndLaptop
					? '6em 0'
					: `${theme.isTablet ? '4em 0' : '30vh 16px 40vh'}`};
		}
	}
`

export const Container = styled.div`
	width: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '1100px' : '100%'};
	margin: 0 auto;
	padding: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '0' : '0 16px'};
	box-sizing: border-box;
`

export const MainContainer = styled.div`
	display: flex;
	flex-direction: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop || theme.isTablet
			? 'row'
			: 'column'};
	width: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '1100px' : '100%'};
	margin: 0 auto;
	padding: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '0' : '0 16px'};
	box-sizing: border-box;
	align-items: center;
`
export const MainFlexBox = styled.div`
	&:first-child {
		width: 40%;
		min-width: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop
				? '400px'
				: `${theme.isTablet ? '' : '100%'}`};
	}

	&:last-child {
		width: 60%;
		font-size: 0;
		min-width: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop
				? ''
				: `${theme.isTablet ? '' : '100%'}`};
		display: ${({ theme }) =>
			theme.isDesktop || theme.isTabletAndLaptop ? 'flex' : 'block'};
	}

	& > img {
		width: 100%;
		max-height: 100%;
	}
`

export const Title1 = styled.h1`
	margin: 0;
	color: #fff;
	font-size: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '64px' : '3em'};
	font-weight: bold;
	line-height: 1.2;
	white-space: nowrap;
	&.primary {
		color: ${({ theme }) => theme.PALETTE.primary[100]};
	}
`

export const Title2 = styled.h2`
	margin: 0;
	margin-bottom: 1em;
	font-size: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '45px' : '1.8em'};
	font-weight: bold;
	text-align: center;
`

export const SubTitle = styled.div`
	font-size: 1em;
	line-height: 1.5;
	margin-top: 2.5em;
`

export const ButtonWrapper = styled.div`
	&.flex-center {
		width: ${({ theme }) => (theme.isMobile ? '100%' : '360px')};
		margin: 0 auto 100px;
		text-align: center;
	}

	&.flex-left {
		margin-top: 2em;
		width: 240px;
	}
`

export const MapIconWrapper = styled.div`
	position: relative;
`

export const MapCircle = styled.div`
	position: absolute;
	transform: rotateX(55deg);
	bottom: 0;
	left: 50%;
	margin-left: -2px;

	&:after {
		content: '';
		border-radius: 50%;
		height: 30px;
		width: 30px;
		position: absolute;
		margin: -13px 0 0 -13px;
		animation: ${pulsate} 1s ease-out;
		animation-iteration-count: infinite;
		opacity: 0;
		box-shadow: 0 0 1px 2px rgb(242, 113, 79);
		animation-delay: 1s;
	}
`

export const BenefitIcon = styled.i`
	position: relative;
	display: block;
	width: 30px;
	height: 30px;

	&.map {
		height: 37px;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 30px;
			height: 30px;
			background-color: rgb(242, 113, 79);
			border-radius: 15px 15px 15px 2px;
			transform: rotate(-45deg);
		}

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			margin: 7px;
			width: 16px;
			height: 16px;
			background-color: #fff;
			border-radius: 10px;
		}
	}

	&.chat {
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 30px;
			height: 30px;
			background-color: #009d91;
			border-radius: 15px 15px 2px 15px;
		}

		&:after {
			content: '';
			position: absolute;
			top: 14px;
			left: 6px;
			width: 18px;
			height: 1px;
			border-top: 4px dotted #fff;

			animation: 1s infinite alternate ${fadeOut};
		}
	}

	&.coin {
		width: 30px;
		height: 30px;
		margin-left: 4px;
		background-color: #c48f32;
		border-radius: 50%;

		&:before {
			content: '';
			position: absolute;
			left: -4px;
			width: 30px;
			height: 30px;
			/* background-color: #f3ce38; */
			background-image: linear-gradient(
				to bottom right,
				#f3ce38 40%,
				#fff2bc 50%,
				#f3ce38 60%,
				#f3ce38 100%
			);
			border-radius: 16px;
			background-repeat: repeat-y;
			background-size: 90px;
			animation: 2s infinite ${shine};
		}

		&:after {
			content: '';
			position: absolute;
			left: -4px;
			width: 20px;
			height: 20px;
			border: 2px solid #c48f32;
			opacity: 0.6;
			border-radius: 15px;
			transform: translate(3px, 3px);
		}
	}

	&.pic {
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 30px;
			height: 30px;
			background-color: rgb(96, 116, 246);
			border-radius: 6px;
			animation: 2s infinite ${fadeOut};
		}

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 18px;
			height: 18px;
			background-color: rgb(96, 116, 246);
			border: 2px solid rgb(96, 116, 246);
			border-radius: 50%;
			transform: translate(4px, 4px);
		}
	}
`
