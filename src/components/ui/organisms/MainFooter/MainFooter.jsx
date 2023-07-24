import React from 'react'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import footerlogo from '../../../../assets/images/github_logo.png'

const MainFooter = props => {
	return (
		<S.Footer>
			<S.Waves>
				<S.Wave id="wave1"></S.Wave>
				<S.Wave id="wave2"></S.Wave>
				<S.Wave id="wave3"></S.Wave>
				<S.Wave id="wave4"></S.Wave>
			</S.Waves>
			<S.Icon>
				<li>
					<a>
						<img src={footerlogo} />
					</a>
				</li>
			</S.Icon>
			<S.FooterP>KIT-Frontend-Team2 | Contact us in Github</S.FooterP>
		</S.Footer>
	)
}

export default MainFooter

export const S = {}

S.Footer = styled.div`
	position: relative;
	width: 100%;
	background: #3586ff;
	min-height: 100px;
	padding: 20px 50px;
	${flexCenter}
	flex-direction: column
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
		z-index: 100;
		opacity: 1;
		bottom: 0;
		animation: animateWaves 6s linear infinite;
	}

	&:nth-child(2) {
		z-index: 99;
		opacity: 0.5;
		bottom: 10px;
		animation: animateWaves 6s linear infinite !important;
	}

	&:nth-child(3) {
		z-index: 100;
		opacity: 0.2;
		bottom: 15px;
		animation: animateWaves 5s linear infinite;
	}
	&:nth-child(4) {
		z-index: 99;
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

S.Icon = styled.ul`
	position: relative;
	${flexCenter}
	margin: 10px 0;
	flex-wrap: wrap;

	li {
		list-style: none;
	}
	a {
		font-size: 2rem;
		color: #fff;
		margin: 0 10px;
		display: inline-block;
		transition: 0.5s;
		&:hover {
			transform: translateY(-10px);
		}
	}
`
S.FooterP = styled.p`
	margin-left: 30px;
`
