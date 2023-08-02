import ProductForm from 'components/templates/ProductFormTemplate/ProductForm'
import LoadApi from 'hooks/pageQuery/useLoadPage'
import { useParams } from 'react-router-dom'

const ProductUpdatePage = () => {
	const { getDetailPage } = LoadApi()
	const productId = useParams().productId

	const { data } = getDetailPage(productId)

	return (
		<>
			<ProductForm detail={data.data.data} />
		</>
	)
}

export default ProductUpdatePage
