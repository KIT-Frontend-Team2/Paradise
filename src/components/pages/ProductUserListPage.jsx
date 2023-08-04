import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductSearchUserTemplate from '../templates/ProductSearchUserTemplate/ProductSearchUserTemplate'

const ProductUserListPage = () => {
	const { getSearchUserPage } = LoadApi()
	const { userId } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data } = getSearchUserPage(userId, page)
	const { product, pagination } = data.data
	return (
		<ProductSearchUserTemplate
			pagination={pagination}
			products={product}
			userName={userId}
		/>
	)
}

export default ProductUserListPage
