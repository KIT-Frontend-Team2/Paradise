import ProductForm from 'components/templates/ProductFormTemplate/ProductForm'
import LoadApi from 'hooks/pageQuery/useLoadPage'
import { useParams } from 'react-router-dom'

const ProductUpdatePage = () => {
	const { getDetailPage } = LoadApi()
	const productId = useParams().productId

	const { data } = getDetailPage(Number(productId))

	return (
		<>
			<ProductForm
				isSeller={data.data.isSeller}
				detail={data.data.searchProduct}
			/>
		</>
	)
}

export default ProductUpdatePage
