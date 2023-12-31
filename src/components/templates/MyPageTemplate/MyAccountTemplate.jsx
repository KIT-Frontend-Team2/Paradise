import MyPageInfo from 'components/ui/organisms/MyPageSection/MyPageInfo'
import React from 'react'
import { styled } from 'styled-components'

const MyAccountTemplate = () => {
	return (
		<S.Wrapper>
			<S.TopArea>
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
	width: ${({ theme }) => (theme.isDesktop ? '873px' : '100%')};
	min-height: 100vh;
`

S.TopArea = styled.div`
	display: ${({ theme }) => (theme.isDesktop ? 'flex' : 'none')};
	justify-content: space-between;
	align-items: center;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
`

S.Text = styled.p``
S.Content = styled.div`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
`
