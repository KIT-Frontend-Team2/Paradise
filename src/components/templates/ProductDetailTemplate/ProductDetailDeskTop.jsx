import React from 'react'
import styled from 'styled-components'

import useResizeEventGetWidth from '../../../hooks/mediaquery/useResizeEventGetWidth'
import DeImgSection from '../../ui/organisms/DeImgSection/DeImgSection'
import DeProductCategoryTag from '../../ui/organisms/DeProductCategoryTag/DeProductCategoryTag'
import DeProductChartSection from '../../ui/organisms/DeProductChartSection/DeProductChartSection'
import DeProductMapSection from '../../ui/organisms/DeProductMapSection/DeProductMapSection'
import DeProductSection from '../../ui/organisms/DeProductSection/DeProductSection'
import DeRelatedCarousel from '../../ui/organisms/DeRelatedCarousel/DeRelatedCarousel'
import DeUserProductSection from '../../ui/organisms/DeUserProductSection/DeUserProductSection'

const ProductDetailDeskTop = ({ productInfo }) => {
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
			if (y === 0) return 0
			return `${y / 10000}만원`
		},
	}

	const [containerWidth, widthRef] = useResizeEventGetWidth()

	return (
		<S.Wrapper>
			<S.Container>
				<S.FlexBox>
					<DeImgSection
						containerWidth={containerWidth}
						itemData={productInfo.product_imgs}
					/>
					<div ref={widthRef}>
						<DeProductSection
							isBuyer={productInfo.isBuyer}
							chatCount={productInfo.product_chat_count}
							isLike={productInfo.isLike}
							like={productInfo.product_like}
							price={productInfo.product_price}
							time={productInfo.product_create_at}
							title={productInfo.product_name}
							productInfo={productInfo.product_content}
							containerWidth={containerWidth}
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
							containerWidth={containerWidth}
						/>
						<DeProductChartSection
							containerWidth={containerWidth}
							chartData={newChartData}
							category={productInfo.chart_data.product_tag}
							margin={{
								top: 5,
								right: 5,
								bottom: 20,
								left: 20,
							}}
						/>
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
	width: 90%;
	margin: 0 auto;
`

S.Flex = styled.div`
	display: flex;
`

S.FlexBox = styled(S.Flex)`
	padding-bottom: 30px;
	> div {
		width: 50%;
	}
`

export default ProductDetailDeskTop
