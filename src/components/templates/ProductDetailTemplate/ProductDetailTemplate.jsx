import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useDevice } from '../../../hooks/mediaQuery/useDevice'
import useResizeEventGetWidth from '../../../hooks/mediaQuery/useResizeEventGetWidth'
import useProductService from '../../../hooks/service/useProduct.service'
import useViewListApi from '../../../hooks/service/useViewList.service'
import getStartAndEndDate from '../../../utils/chartDate-helper'
import getMonthPriceAvg from '../../../utils/getMonthPriceAvg'
import Container from '../../layout/Container'
import SSlideBanner from '../../ui/molecules/SlideBanner/SSlideBanner'
import DeImgSection from '../../ui/organisms/DeImgSection/DeImgSection'
import DeProductCategoryTag from '../../ui/organisms/DeProductCategoryTag/DeProductCategoryTag'
import DeProductChartSection from '../../ui/organisms/DeProductChartSection/DeProductChartSection'
import DeProductMapSection from '../../ui/organisms/DeProductMapSection/DeProductMapSection'
import DeProductSection from '../../ui/organisms/DeProductSection/DeProductSection'
import DeRelatedCarousel from '../../ui/organisms/DeRelatedCarousel/DeRelatedCarousel'
import DeUserProductSection from '../../ui/organisms/DeUserProductSection/DeUserProductSection'

const ProductDetailTemplate = ({ productInfo }) => {
	const { Ondo, nick_name, profile_url } = productInfo.searchProduct.User

	const { product } = productInfo.relatedProduct
	let {
		ProductImages,
		createdAt,
		description,
		idx,
		img_url,
		liked,
		price,
		region,
		status,
		title,
		ProductsTags,
		user_idx,
	} = productInfo.searchProduct
	const img_array = [img_url, ...ProductImages.map(item => item.img_url)]
	const ChartDate = getStartAndEndDate()
	const [isChart, setIsChart] = useState(true)

	if (ProductsTags.length === 0) {
		ProductsTags = [{ Tag: { tag: '기타 중고 물품' } }]
	}
	const { data } = useProductService.useGetChartData(
		ProductsTags[0].Tag.tag,
		ChartDate[0],
		ChartDate[ChartDate.length - 1],
	)

	const relatedProduct = product.filter(data => data.idx !== idx)
	useEffect(() => {
		if (
			getMonthPriceAvg(data.data.cumulativeAvgPrice, ChartDate).filter(
				data => data['평균가'] !== 0,
			).length === 0
		) {
			setIsChart(false)
		}
	}, [productInfo])

	const chartData = {
		data: getMonthPriceAvg(data.data.cumulativeAvgPrice, ChartDate),
		x: 'name',
		y: '평균가',
		formatter: y => {
			if (y < 10) {
				return ''
			}
			if (y / 10000 < 1) {
				return `${y.toLocaleString()}원`
			}
			return `${(y / 10000).toLocaleString()}만원`
		},
	}

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
					<DeImgSection
						img_url={img_url}
						containerWidth={containerWidth}
						Images={img_array}
					/>
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
						chatCount={productInfo.chat.length}
						isLike={!!liked}
						like={productInfo.product_like}
						price={price}
						time={createdAt}
						title={title}
						state={status}
						productInfo={description}
						nickName={nick_name}
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
					{isDesk && (
						<DeProductChartSection
							isChart={isChart}
							containerWidth={containerWidth - 30}
							chartData={chartData}
							category={ProductsTags[0].Tag.tag}
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
			<DeRelatedCarousel product={relatedProduct} />
		</Container>
	)
}

ProductDetailTemplate.proptype = {
	productInfo: PropTypes.object.isRequired,
}

export const S = {}

S.Flex = styled.div`
	display: flex;
	gap: 30px;
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
