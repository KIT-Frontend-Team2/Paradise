import React from 'react'
import styled from 'styled-components'

import { useDevice } from '../../../hooks/mediaQuery/useDevice'
import useResizeEventGetWidth from '../../../hooks/mediaQuery/useResizeEventGetWidth'
import SSlideBanner from '../../ui/molecules/SlideBanner/SSlideBanner'
import DeImgSection from '../../ui/organisms/DeImgSection/DeImgSection'
import DeProductCategoryTag from '../../ui/organisms/DeProductCategoryTag/DeProductCategoryTag'
import DeProductChartSection from '../../ui/organisms/DeProductChartSection/DeProductChartSection'
import DeProductMapSection from '../../ui/organisms/DeProductMapSection/DeProductMapSection'
import DeProductSection from '../../ui/organisms/DeProductSection/DeProductSection'
import DeRelatedCarousel from '../../ui/organisms/DeRelatedCarousel/DeRelatedCarousel'
import DeUserProductSection from '../../ui/organisms/DeUserProductSection/DeUserProductSection'

const ProductDetailTemplate = ({ productInfo }) => {
	const {
		user_nick_name,
		user_product_count,
		user_product_list,
		user_profile_url,
		user_temperature,
		user_id,
	} = productInfo.seller_info

	const chartData = { ...productInfo.chart_data }
	const newChartData = {
		...chartData,
		x: 'name',
		y: '평균 거래가',
		formatter: y => {
			if (y === 0) {
				return 0
			}
			return `${y / 10000}만원`
		},
	}

	const { isDesktop, isTablet } = useDevice()

	const isDesk = isDesktop || isTablet
	const [containerWidth, widthRef] = useResizeEventGetWidth()
	return (
		<S.Wrapper>
			<S.Container deskTop={isDesk}>
				<S.FlexBox deskTop={isDesk}>
					{isDesk ? (
						<DeImgSection
							containerWidth={containerWidth}
							itemData={productInfo.product_imgs}
						/>
					) : (
						<SSlideBanner Images={productInfo.product_imgs} loop={true} />
					)}
					<div
						ref={widthRef}
						style={{ boxSizing: 'border-box', padding: '10px' }}
					>
						<DeProductSection
							isBuyer={productInfo.isBuyer}
							chatCount={productInfo.product_chat_count}
							isLike={productInfo.isLike}
							like={productInfo.product_like}
							price={productInfo.product_price}
							time={productInfo.product_create_at}
							title={productInfo.product_title}
							state={productInfo.product_state}
							productInfo={productInfo.product_content}
							containerWidth={containerWidth - 30}
						/>
						<DeProductCategoryTag category={productInfo.product_tag} />
						<DeProductMapSection rightTitle={productInfo.product_place} />
						<DeUserProductSection
							imgProfile={user_profile_url}
							userTemplate={user_temperature}
							itemData={user_product_list}
							productCount={user_product_count}
							userName={user_nick_name}
							userId={user_id}
							containerWidth={containerWidth - 30}
						/>
						{isDesk && (
							<DeProductChartSection
								containerWidth={containerWidth - 30}
								chartData={newChartData}
								category={productInfo.chart_data.product_tag}
								margin={{
									top: 5,
									right: 5,
									bottom: 20,
									left: 20,
								}}
							/>
						)}
					</div>
				</S.FlexBox>
				<DeRelatedCarousel products={productInfo.recommended_product} />
			</S.Container>
		</S.Wrapper>
	)
}

export const S = {}

S.Wrapper = styled.div`
	width: 100%;
	height: auto;
`
S.Container = styled.div`
	max-width: 1100px;
	width: ${({ deskTop }) => (deskTop ? 90 : 100)}%;
	margin: 0 auto;
`

S.Flex = styled.div`
	display: flex;
`

S.FlexBox = styled(S.Flex)`
	padding-bottom: 30px;
	display: ${({ deskTop }) => (deskTop ? 'flex' : 'block')};
	> div {
		width: ${({ deskTop }) => (deskTop ? 50 : 100)}%;
	}
`

export default ProductDetailTemplate
