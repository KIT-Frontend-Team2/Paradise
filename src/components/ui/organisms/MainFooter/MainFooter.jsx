import { useDevice } from 'hooks/mediaQuery/useDevice'
import React from 'react'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import footerlogo from '../../../../assets/images/github_logo.png'
import FooterMobile from '../FooterMobile/FooterMobile'

const MainFooter = props => {
	const { isMobile } = useDevice()
	return (
		<>
			{isMobile ? (
				<FooterMobile />
			) : (
				<S.Footer>
					<S.Waves>
						<S.Wave id="wave1"></S.Wave>
						<S.Wave id="wave2"></S.Wave>
						<S.Wave id="wave3"></S.Wave>
						<S.Wave id="wave4"></S.Wave>
					</S.Waves>
					<S.LogoBox>
						<S.Icon>
							<img src={footerlogo} />
						</S.Icon>
						<S.TextBox>KIT-Frontend-Team2 | Contact us in Github</S.TextBox>
					</S.LogoBox>
				</S.Footer>
			)}
		</>
	)
}

export default MainFooter

export const S = {}

S.Footer = styled.div`
	position: relative;
	bottom: 0;
	left: 0;
	width: 100%;
	background: #3586ff;
	height: 100px;
	${flexCenter}
`

S.Waves = styled.div`
	position: absolute;
	top: -100px;
	width: 100%;
	height: 100px;
`

S.Wave = styled.div`
	position: absolute;
	width: 100%;
	height: 100px;
	background-image: url('https://i.ibb.co/wQZVxxk/wave.png');
	background-size: 1000px 100px;

	&:nth-child(1) {
		z-index: 10;
		opacity: 1;
		bottom: 0;
		animation: animateWaves 6s linear infinite;
	}

	&:nth-child(2) {
		z-index: 9;
		opacity: 0.5;
		bottom: 10px;
		animation: animateWaves 6s linear infinite !important;
	}

	&:nth-child(3) {
		z-index: 10;
		opacity: 0.2;
		bottom: 15px;
		animation: animateWaves 5s linear infinite;
	}
	&:nth-child(4) {
		z-index: 9;
		opacity: 0.7;
		bottom: 20px;
		animation: animate 5s linear infinite;
	}

	@keyframes animateWaves {
		0% {
			background-position-x: 1000px;
		}
		100% {
			background-position-x: 0px;
		}
	}

	@keyframes animate {
		0% {
			background-position-x: -1000px;
		}
		100% {
			background-position-x: 0px;
		}
	}
`

S.Icon = styled.div`
	position: relative;
	${flexCenter}
	flex-wrap: wrap;
	img {
		font-size: 2rem;
		display: inline-block;
		transition: 0.5s;
		&:hover {
			transform: translateY(-10px);
		}
	}
`
S.TextBox = styled.div`
	text-align: center;
	margin-top: 20px;
`

S.LogoBox = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`
