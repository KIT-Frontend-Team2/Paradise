import MySellTempalte from '__mock__/datas/mysellTemplate.mock'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import React from 'react'
import { styled } from 'styled-components'
import { useDevice } from 'hooks/mediaQuery/useDevice'


const MyWishTemplate = () => {
	const { isTablet, isMobileAndTablet, isTabletAndLaptop, isMobile } = useDevice()
	const isDesk =  isTablet || isTabletAndLaptop || isMobile || isMobileAndTablet

	const { all, free, sale } = MySellTempalte.data.user_product_list

	return (
		<S.Wrapper  isdesk={isDesk.toString()}>
			<S.Title  isdesk={isDesk.toString()}>등록상품</S.Title>
			<S.Content>
				<MyPageContent all={all} free={free} sale={sale} />
			</S.Content>
		</S.Wrapper>
	)
}

export default MyWishTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ isdesk }) => (isdesk === 'true' ? '100%' : '873px')};
	min-height: 100vh;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
	display: ${({ isdesk }) => (isdesk === 'true' ? 'none' : 'block')};
`
S.Content = styled.div``
