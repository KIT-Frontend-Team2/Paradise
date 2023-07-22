import { useParams } from 'react-router-dom'

import { loadDetailPage } from '../../hooks/pageQuery/useLoadPage'
import ProductDetailTemplate from '../templates/ProductDetailTemplate/ProductDetailTemplate'
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

	return <ProductDetailTemplate productInfo={data.data.data} />
}

export default ProductDetailPage
