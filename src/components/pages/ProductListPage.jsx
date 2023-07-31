import { useParams, useSearchParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductListTemplate from '../templates/ProductListTemplate/ProductListTemplate'

const ProductListPage = () => {
	const { filter } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { getListPage } = LoadApi()
	const { data } = getListPage(filter, page)

	return (
		<ProductListTemplate
			page={page}
			total={data.data.total}
			filter={filter}
			products={data.data.data}
		/>
	)
}

export default ProductListPage
