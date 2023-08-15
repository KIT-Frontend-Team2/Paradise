import mainMobile from 'assets/images/main-section-bg-m.png'
import main from 'assets/images/main-section-bg.png'
import Button from 'components/ui/atoms/Button/Button'
import { useDevice } from 'hooks/mediaQuery/useDevice'

import * as S from './style'

const LandingPageTemplate = ({ type, movePage }) => {
	const {
		isDesktop,
		isTabletAndLaptop,
		isTablet,
		isMobileAndTablet,
		isMobile,
	} = useDevice()

	return (
		<>
			<S.Section className="section1">
				<S.MainContainer>
					<S.MainFlexBox>
						<S.Title1>파라다이스?</S.Title1>
						<S.Title1 className="primary">팔아다있음!</S.Title1>
						<S.SubTitle>
							집에 혼자있는 중고제품 팔면 돈이 된다?
							<br />
							수수료 없는 무료 중고거래, 나눔 사이트 파라다이스
						</S.SubTitle>
						<S.ButtonWrapper className="flex-left">
							<Button
								size={isDesktop || isTabletAndLaptop ? 'full' : 'medium'}
								label={type === 'landing' ? '로그인하러 가기' : '판매하러 가기'}
								variant={'primary'}
								onClick={movePage}
							/>
						</S.ButtonWrapper>
					</S.MainFlexBox>
					<S.MainFlexBox>
						{isDesktop || isTabletAndLaptop || isTablet ? (
							<img src={main} />
						) : (
							<img src={mainMobile} />
						)}
					</S.MainFlexBox>
				</S.MainContainer>
			</S.Section>
			<S.Section className="section2 text-center">
				<S.Container>
					<S.Title2>한눈에 보는 파라다이스 기능</S.Title2>
					<ul>
						<li>
							<S.MapIconWrapper>
								<S.BenefitIcon className="map" />
								<S.MapCircle />
							</S.MapIconWrapper>
							<div>
								동네 사람들끼리
								<br />
								수수료 없는 거래
							</div>
						</li>
						<li>
							<S.BenefitIcon className="coin" />
							<div>
								월간 가계부로
								<br />
								판매 금액 관리
							</div>
						</li>
						<li>
							<S.BenefitIcon className="chat" />
							<div>
								판매자 구매자 간의
								<br />
								1:1 실시간 채팅
							</div>
						</li>
						<li>
							<S.BenefitIcon className="pic" />
							<div>
								AI 배경 제거로
								<br />
								물품 커스터마이징
							</div>
						</li>
					</ul>
				</S.Container>
			</S.Section>
			<S.Section className="section3 text-center" type={type}>
				<S.Container>
					<S.Title2>
						지금 {type === 'landing' && '로그인하고'} 동네 이웃들과
						<br />
						물품 거래를 시작해보세요
					</S.Title2>
					<S.ButtonWrapper className="flex-center">
						<Button
							size={'full'}
							label={type === 'landing' ? '로그인하러 가기' : '판매하러 가기'}
							variant={'primary-outlined'}
							onClick={movePage}
						/>
					</S.ButtonWrapper>
				</S.Container>
			</S.Section>
		</>
	)
}

export default LandingPageTemplate
