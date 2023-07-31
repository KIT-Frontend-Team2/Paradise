import MyPageInfo from 'components/ui/organisms/MyPageSection/MyPageInfo'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import React from 'react'
import { styled } from 'styled-components'

const MyAccountTemplate = () => {
	const { isTablet, isMobileAndTablet, isTabletAndLaptop, isMobile } =
		useDevice()
	const isDesk = isTablet || isTabletAndLaptop || isMobile || isMobileAndTablet

	return (
		<S.Wrapper isdesk={isDesk.toString()}>
			<S.TopArea isdesk={isDesk.toString()}>
				<S.Title>계정관리</S.Title>
				<S.Text>내 정보 관리</S.Text>
			</S.TopArea>
			<S.Content>
				<MyPageInfo />
			</S.Content>
		</S.Wrapper>
	)
}

export default MyAccountTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ isdesk }) => (isdesk === 'true' ? '100%' : '873px')};
	min-height: 100vh;
`

S.TopArea = styled.div`
	display: ${({ isdesk }) => (isdesk === 'true' ? 'none' : 'flex')};
	justify-content: space-between;
	align-items: center;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
	display: ${({ isdesk }) => (isdesk === 'true' ? 'none' : 'block')};
`

S.Text = styled.p``
S.Content = styled.div`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
`
