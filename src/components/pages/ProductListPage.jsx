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
	const { product, pagination } = data.data

	let title = ''

	switch (filter) {
		case 'sell':
			title = '판매 상품'
			break
		case 'free':
			title = '나눔 상품'
			break
		case 'all':
			title = '상품 목록'
			break
		default:
			throw new Error('옳지 않은 접근입니다.')
	}

	return (
		<ProductListTemplate
			pagination={pagination}
			products={product}
			title={title}
		/>
	)
}

export default ProductListPage
