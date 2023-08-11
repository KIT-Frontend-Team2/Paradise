import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import useViewListApi from 'hooks/service/useViewList.service'
import React from 'react'
import { styled } from 'styled-components'

const MyRecentTemplate = () => {
	const { data } = useViewListApi.useGetViewList()
	const {productList} = data.data
	return (
		<S.Wrapper>
			<S.Title>최근 조회 상품</S.Title>
			<S.Content>
				<MyPageContent products={productList} />
			</S.Content>
		</S.Wrapper>
	)
}

export default MyRecentTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ theme }) => (theme.isDesktop ? '873px' : '100%')};
	min-height: 100vh;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
`
S.Content = styled.div``
