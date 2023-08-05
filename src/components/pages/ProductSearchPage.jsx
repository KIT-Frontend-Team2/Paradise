import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductListTemplate from '../templates/ProductListTemplate/ProductListTemplate'

const ProductSearchPage = () => {
	const { getSearchPage } = LoadApi()
	const { keyword } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data } = getSearchPage(keyword, page)
	const { product, pagination } = data.data
	return (
		<ProductListTemplate
			pagination={pagination}
			products={product}
			title={keyword}
			intro={'의 검색결과 입니다.'}
		/>
	)
}

export default ProductSearchPage
