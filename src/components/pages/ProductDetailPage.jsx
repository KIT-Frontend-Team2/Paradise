import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { loadDetailPage } from '../../hooks/pageQuery/useLoadPage'
import ProductDetailTemplate from '../templates/ProductDetailTemplate/ProductDetailTemplate'
import DeImgSection from '../ui/organisms/DeImgSection/DeImgSection'
import DeProductCategoryTag from '../ui/organisms/DeProductCategoryTag/DeProductCategoryTag'
import DeProductChartSection from '../ui/organisms/DeProductChartSection/DeProductChartSection'
import DeProductMapSection from '../ui/organisms/DeProductMapSection/DeProductMapSection'
import DeProductSection from '../ui/organisms/DeProductSection/DeProductSection'
import DeRelatedCarousel from '../ui/organisms/DeRelatedCarousel/DeRelatedCarousel'
import DeUserProductSection from '../ui/organisms/DeUserProductSection/DeUserProductSection'

const ProductDetailPage = () => {
	const productId = useParams().productId

	const { data, isError, isLoading } = loadDetailPage(productId)

	if (isError) {
		return <>'Error Loading'</>
	}

	if (isLoading) {
		return <ProductDetailTemplate />
	}

	const productInfo = data.data.data
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

	return (
		<S.Wrapper>
			<S.Container>
				<S.FlexBox>
					<DeImgSection itemData={productInfo.product_imgs} />
					<S.RightSection>
						<DeProductSection
							isBuyer={productInfo.isBuyer}
							chatCount={productInfo.product_chat_count}
							isLike={productInfo.isLike}
							like={productInfo.product_like}
							price={productInfo.product_price}
							time={productInfo.product_create_at}
							title={productInfo.product_name}
							productInfo={productInfo.product_content}
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
						/>
						<DeProductChartSection
							chartData={newChartData}
							size={{
								width: 550,
								height: 300,
							}}
							category={productInfo.chart_data.product_tag}
							margin={{
								top: 5,
								right: 5,
								bottom: 20,
								left: 20,
							}}
						/>
					</S.RightSection>
				</S.FlexBox>
				<DeRelatedCarousel products={productInfo.recommended_product} />
			</S.Container>
		</S.Wrapper>
	)
}

export default ProductDetailPage

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
S.RightSection = styled.div``
