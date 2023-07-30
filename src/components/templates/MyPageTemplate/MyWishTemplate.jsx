import MySellTempalte from '__mock__/datas/mysellTemplate.mock'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import React from 'react'
import { styled } from 'styled-components'

const MyWishTemplate = () => {
	const { all, free, sale } = MySellTempalte.data.user_product_list

	return (
		<S.Wrapper>
			<S.Title>등록상품</S.Title>
			<S.Content>
				<MyPageContent all={all} free={free} sale={sale} />
			</S.Content>
		</S.Wrapper>
	)
}

export default MyWishTemplate

const S = {}

S.Wrapper = styled.div`
	width: 873px;
	min-height: 100vh;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
`
S.Content = styled.div``
