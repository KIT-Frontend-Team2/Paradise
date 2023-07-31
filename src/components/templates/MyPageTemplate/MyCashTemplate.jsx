import mycashPageMock from '__mock__/datas/mycashTemplate.mock'
import MyPageContent from 'components/ui/organisms/MyPageSection/MyPageContent'
import TotalPrice from 'components/ui/organisms/MyPageSection/MyTotalPrice'
import React from 'react'
import { styled } from 'styled-components'
import { useDevice } from 'hooks/mediaQuery/useDevice'

const MyCashTemplate = () => {
	const { isTablet, isMobileAndTablet, isTabletAndLaptop, isMobile } = useDevice()
	const isDesk =  isTablet || isTabletAndLaptop || isMobile || isMobileAndTablet


	const { user_info, user_product_list } = mycashPageMock.data
	const { user_nick_name, user_total_product } = user_info
	const { threeMonths, SixMonths, Ninemonths, year } =
		user_product_list[1].contents
	const {
		all: allState,
		Salesdetails,
		Purchasedetails,
	} = user_product_list[2].contents

	return (
		<S.Wrapper isdesk={isDesk.toString()}>
			<S.Title isdesk={isDesk.toString()}>
				{user_nick_name}님의 {}월 <br />
				가계부 입니다.
			</S.Title>
			<S.TotalPrice>
				<TotalPrice user_total_product={user_total_product} />
			</S.TotalPrice>
			<S.Content>
				<MyPageContent
					all={user_product_list[0].contents.all}
					free={user_product_list[0].contents.free}
					sale={user_product_list[0].contents.sale}
					// user_product_list[1]에 해당하는 데이터를 전달합니다.
					threeMonths={threeMonths}
					SixMonths={SixMonths}
					Ninemonths={Ninemonths}
					year={year}
					// user_product_list[2]에 해당하는 데이터를 전달합니다.
					allState={allState}
					Salesdetails={Salesdetails}
					Purchasedetails={Purchasedetails}
				/>
			</S.Content>
		</S.Wrapper>
	)
}

export default MyCashTemplate

const S = {}

S.Wrapper = styled.div`
	width: ${({ isdesk }) => (isdesk === 'true' ? '100%' : '873px')};
	min-height: 100vh;
`

S.Title = styled.h2`
	font-size: 24px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	text-align: left;
`
S.Content = styled.div``

S.TotalPrice = styled.div`
	margin: 60px 0;
`
