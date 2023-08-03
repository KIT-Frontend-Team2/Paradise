import PropTypes from 'prop-types'
import { useEffect } from 'react'
import styled from 'styled-components'

import { useDevice } from '../../../hooks/mediaQuery/useDevice'
import useResizeEventGetWidth from '../../../hooks/mediaQuery/useResizeEventGetWidth'
import useViewListApi from '../../../hooks/service/useViewList.service'
import Container from '../../layout/Container'
import SSlideBanner from '../../ui/molecules/SlideBanner/SSlideBanner'
import DeImgSection from '../../ui/organisms/DeImgSection/DeImgSection'
import DeProductCategoryTag from '../../ui/organisms/DeProductCategoryTag/DeProductCategoryTag'
// import DeProductChartSection from '../../ui/organisms/DeProductChartSection/DeProductChartSection'
import DeProductMapSection from '../../ui/organisms/DeProductMapSection/DeProductMapSection'
import DeProductSection from '../../ui/organisms/DeProductSection/DeProductSection'
import DeRelatedCarousel from '../../ui/organisms/DeRelatedCarousel/DeRelatedCarousel'
import DeUserProductSection from '../../ui/organisms/DeUserProductSection/DeUserProductSection'

const ProductDetailTemplate = ({ productInfo }) => {
	const { Ondo, nick_name, profile_url } = productInfo.searchProduct.User
	const { pagination, product } = productInfo.relatedProduct
	const {
		ProductImages,
		ProductsTags,
		createdAt,
		description,
		idx,
		img_url,
		liked,
		price,
		region,
		status,
		title,
		user_idx,
	} = productInfo.searchProduct
	const img_array = [img_url, ...ProductImages.map(item => item.img_url)]
	// const chartData = { ...productInfo.chart_data }
	// const newChartData = {
	// 	...chartData,
	// 	x: 'name',
	// 	y: '평균 거래가',
	// 	formatter: y => {
	// 		if (y === 0) {
	// 			return 0
	// 		}
	// 		return `${y / 10000}만원`
	// 	},
	// }

	const { mutate } = useViewListApi.usePostViewList(idx)

	useEffect(() => {
		mutate({
			Product: {
				createdAt,
				idx,
				img_url,
				price,
				status,
				title,
			},
			idx: Math.floor(Math.random() * 100000),
		})
	}, [])

	const { isDesktop, isTablet, isTabletAndLaptop } = useDevice()

	const isDesk = isDesktop || isTablet || isTabletAndLaptop
	const [containerWidth, widthRef] = useResizeEventGetWidth()
	return (
		<Container>
			<S.FlexBox desktop={isDesk.toString()}>
				{isDesk ? (
					<DeImgSection containerWidth={containerWidth} itemData={img_array} />
				) : (
					<SSlideBanner Images={img_array} loop={true} />
				)}
				<div
					ref={widthRef}
					style={{ boxSizing: 'border-box', padding: '10px' }}
				>
					<DeProductSection
						id={idx}
						isBuyer={productInfo.isSeller}
						chatCount={productInfo.product_chat_count}
						isLike={!!liked}
						like={productInfo.product_like}
						price={price}
						time={createdAt}
						title={title}
						state={status}
						productInfo={description}
						containerWidth={containerWidth - 30}
					/>
					<DeProductCategoryTag category={ProductsTags} />
					<DeProductMapSection rightTitle={region} />
					<DeUserProductSection
						imgProfile={profile_url}
						userTemplate={Ondo.ondo}
						// itemData={user_product_list}
						// productCount={user_product_count}
						userName={nick_name}
						userId={user_idx}
						containerWidth={containerWidth - 30}
					/>
					{/*{isDesk (*/}
					{/*    <DeProductChartSection*/}
					{/*        containerWidth={containerWidth - 30}*/}
					{/*        chartData={newChartData}*/}
					{/*        category={productInfo.chart_data.product_tag}*/}
					{/*        margin={{*/}
					{/*            top: 5,*/}
					{/*            right: 5,*/}
					{/*            bottom: 20,*/}
					{/*            left: 20,*/}
					{/*        }}*/}
					{/*    />*/}
					{/*)}*/}
				</div>
			</S.FlexBox>
			<DeRelatedCarousel product={product} pagination={pagination} />
		</Container>
	)
}

ProductDetailTemplate.proptype = {
	productInfo: PropTypes.object.isRequired,
}

export const S = {}

S.Flex = styled.div`
	display: flex;
`
S.FlexBox = styled(S.Flex)`
	padding-bottom: 30px;
	display: ${({ theme }) =>
		theme.isDesktop || theme.isTablet || theme.isTabletAndLaptop
			? 'flex'
			: 'block'};

	> div {
		width: ${({ theme }) =>
			theme.isDesktop || theme.isTablet || theme.isTabletAndLaptop ? 50 : 100}%;
	}
`

export default ProductDetailTemplate
