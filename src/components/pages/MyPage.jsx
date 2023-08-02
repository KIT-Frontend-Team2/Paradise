import Container from 'components/layout/Container'
import MyContent from 'components/templates/MyPageTemplate/MyContent'
import MyHeader from 'components/ui/organisms/MyHeader/MyHeader'
import MyMenu from 'components/ui/organisms/MyMenu/MyMenu'
import React from 'react'
import { styled } from 'styled-components'

const MyPage = () => {


	return (
		<>
			<MyHeader />
			<Container>
				<S.Wrapper>
					<MyMenu />
					<S.ContentWrap>
						<MyContent />
					</S.ContentWrap>
				</S.Wrapper>
			</Container>
		</>
	)
}
export default MyPage

const S = {}

S.Wrapper = styled.div`
	display: flex;
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
	gap: 50px;
	min-height: 100vh;
`

S.ContentWrap = styled.div`
	flex: 1;
`
