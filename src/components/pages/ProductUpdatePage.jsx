import Container from 'components/layout/Container'
import ProductForm from 'components/templates/ProductFormTemplate/ProductForm'
import LoadApi from 'hooks/pageQuery/useLoadPage'
import { useParams } from 'react-router-dom'

const ProductUpdatePage = () => {
	const { getDetailPage } = LoadApi()
	const productId = useParams().productId

	const { data, isError, isLoading } = getDetailPage(productId)

	if (isError) {
		return <>Error Loading</>
	}

	if (isLoading) {
		return <Container></Container>
	}

	return (
		<>
			<ProductForm detail={data.data.data} />
		</>
	)
}

export default ProductUpdatePage
