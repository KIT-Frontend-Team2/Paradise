import MySellTempalte from '__mock__/datas/mysellTemplate.mock'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import React from 'react'
import { styled } from 'styled-components'

const MySellTemplate = () => {

	const { all, free, sale } = MySellTempalte.data.user_product_list
	console.log(`전체`, all)
	console.log(`나눔`, free)
	console.log(`판매`, sale)

	return (
		<S.Wrapper>
			<S.Title>등록상품</S.Title>
			<S.Content>
				<MyPageContent all={all} free={free} sale={sale} />
			</S.Content>
		</S.Wrapper>
	)
}

export default MySellTemplate

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
