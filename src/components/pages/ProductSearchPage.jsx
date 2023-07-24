import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import useLoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductSearchTemplate from '../templates/ProductSearchTemplate/ProductSearchTemplate'

const ProductSearchPage = () => {
	const { keyword } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data, isError, isLoading } = useLoadApi.SearchPage(keyword, page)
	if (isError) {
		return <>에러</>
	}

	if (isLoading) {
		return <>로딩중</>
	}

	return (
		<ProductSearchTemplate
			page={page}
			total={data.data.total}
			keyword={keyword}
			products={data.data.data}
		/>
	)
}

export default ProductSearchPage
