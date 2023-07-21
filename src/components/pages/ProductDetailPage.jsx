import { useParams } from 'react-router-dom'

import { loadDetailPage } from '../../hooks/pageQuery/useLoadPage'
import ProductDetailDeskTop from '../templates/ProductDetailTemplate/ProductDetailDeskTop'
import ProductSkeletonTemplate from '../templates/ProductDetailTemplate/ProductSkeletonTemplate'

const ProductDetailPage = () => {
	const productId = useParams().productId

	const { data, isError, isLoading } = loadDetailPage(productId)

	if (isError) {
		return <>Error Loading</>
	}

	if (isLoading) {
		return <ProductSkeletonTemplate />
	}

	return <ProductDetailDeskTop productInfo={data.data.data} />
}

export default ProductDetailPage
