import { useParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductDetailTemplate from '../templates/ProductDetailTemplate/ProductDetailTemplate'

const ProductDetailPage = () => {
	const { getDetailPage } = LoadApi()
	const productId = useParams().productId
	const { data } = getDetailPage(Number(productId))
	return <ProductDetailTemplate productInfo={data.data} />
}

export default ProductDetailPage
