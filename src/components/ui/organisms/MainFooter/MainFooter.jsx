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
						<svg
							className="waves"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 24 150 28"
							preserveAspectRatio="none"
							shape-rendering="auto"
						>
							<path
								x="48"
								y="0"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								fill="rgba(233,233,231,0.6)"
							></path>
							<path
								x="48"
								y="3"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								fill="rgba(233,233,231,0.4)"
							></path>
							<path
								x="48"
								y="5"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								fill="rgba(233,233,231,0.2)"
							></path>
							<path
								x="48"
								y="7"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
								fill="rgba(233,233,231)"
							></path>
						</svg>
					</S.Waves>
					<S.LogoBox>
						<S.Icon>
							<a
								href="https://github.com/KIT-Frontend-Team2/Paradise"
								target="_blank"
							>
								<img src={footerlogo} />
							</a>
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
	background: #e9e9e7;
	height: 120px;
	${flexCenter}
`

S.Waves = styled.div`
	position: absolute;
	top: -40px;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;

	.waves {
		position: relative;
		width: 100%;
		height: 50px;
		margin-bottom: -7px; /*Fix for safari gap*/
	}

	.waves > path {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}
	.waves > path:nth-child(1) {
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.waves > path:nth-child(2) {
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.waves > path:nth-child(3) {
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.waves > path:nth-child(4) {
		animation-delay: -5s;
		animation-duration: 20s;
	}
	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
`

S.Icon = styled.div`
	position: relative;
	${flexCenter}
	flex-wrap: wrap;
	opacity: 0.4;
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
	margin-top: 10px;
	color: ${({ theme }) => theme.PALETTE.gray[800]};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`

S.LogoBox = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`
