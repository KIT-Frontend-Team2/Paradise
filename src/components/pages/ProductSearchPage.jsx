import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductSearchTemplate from '../templates/ProductSearchTemplate/ProductSearchTemplate'

const ProductSearchPage = () => {
	const { getSearchPage } = LoadApi()
	const { keyword } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data } = getSearchPage(keyword, page)
	const { product, pagination } = data.data
	return (
		<ProductSearchTemplate
			pagination={pagination}
			keyword={keyword}
			products={product}
		/>
	)
}

export default ProductSearchPage
