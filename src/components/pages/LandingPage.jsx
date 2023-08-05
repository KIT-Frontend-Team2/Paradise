import section1 from 'assets/images/section-bg1-min.jpg'
import Button from 'components/ui/atoms/Button/Button'
import { styled } from 'styled-components'

import useMove from '../../hooks/useMovePage'

const LandingPage = () => {
	const { linkAuthPage } = useMove()
	const movePage = () => {
		linkAuthPage()
	}
	return (
		<>
			<S.Section className="section1">
				<S.Container>
					<S.Title2>집에 혼자있는 중고제품 팔면 돈이 된다?</S.Title2>
					<S.Title1>
						수수료 없는 무료 중고거래, 나눔 사이트{' '}
						<span className="primary">Paradise</span>
					</S.Title1>
				</S.Container>
			</S.Section>
			<S.Section className="section2 text-center">
				<S.Container>
					<S.Title1>파라다이스 소개</S.Title1>
					<ul>
						<li>
							동네 사람들끼리
							<br />
							수수료 없는 거래
						</li>
						<li>
							판매자 구매자 간의
							<br />
							1:1 실시간 채팅
						</li>
						<li>
							가계부로 나의
							<br />
							판매 금액 관리
						</li>
					</ul>
				</S.Container>
			</S.Section>
			<S.Section className="text-center">
				<S.Container>
					<S.Title1>파라다이스와 함께 팔아보세요</S.Title1>
					<S.ButtonWrapper onClick={movePage}>
						<Button
							size={'full'}
							label={'내 물건 팔러 가기'}
							variant={'primary-outlined'}
						/>
					</S.ButtonWrapper>
				</S.Container>
			</S.Section>
		</>
	)
}

export default LandingPage

const S = {}

S.Section = styled.section`
	padding: 12em 0;
	box-sizing: border-box;

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2em;
		li {
			padding: 3em;
			line-height: 2;
			list-style: none;
			text-align: center;
			background-color: #fff;
		}
	}

	&.section1 {
		background-image: url(${section1});
		background-size: cover;
		background-position: center 70%;
		height: 100vh;
	}

	&.section2 {
		background-color: ${({ theme }) => theme.PALETTE.background.babyMint};
	}

	&.text-center {
		text-align: center;

		h1 {
			margin-bottom: 2em;
		}
	}
`

S.Container = styled.div`
	width: 1100px;
	margin: 0 auto;
`

S.Title1 = styled.h1`
	margin: 0;
	margin-bottom: 12px;
	font-size: 36px;
	font-weight: bold;
	span.primary {
		color: ${({ theme }) => theme.PALETTE.primary[100]};
	}
`

S.Title2 = styled.h2`
	margin: 0;
	margin-bottom: 12px;
	font-size: 30px;
	font-weight: normal;
	span.primary {
		color: ${({ theme }) => theme.PALETTE.primary[100]};
	}
`

S.ButtonWrapper = styled.div`
	width: 400px;
	margin: 0 auto 100px;
	text-align: center;
`
