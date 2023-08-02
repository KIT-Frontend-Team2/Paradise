import { useParams, useSearchParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductListTemplate from '../templates/ProductListTemplate/ProductListTemplate'

const ProductListPage = () => {
	const { filter } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { getListPage } = LoadApi()
	const category = filter === 'sell' ? 0 : 1
	const { data } = getListPage(category, page, '판매중')
	console.log(data)
	return (
		<ProductListTemplate
			page={page}
			total={data.data.pagination.count}
			filter={filter}
			products={data.data.product}
		/>
	)
}

export default ProductListPage
