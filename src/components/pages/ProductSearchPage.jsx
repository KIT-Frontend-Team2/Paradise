import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import useLoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductListTemplate from '../templates/ProductListTemplate/ProductListTemplate'

const ProductSearchPage = () => {
	const { keyWord } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data, isError, isLoading } = useLoadApi.SearchPage(keyWord, page)

	if (isError) {
		return <>에러</>
	}

	if (isLoading) {
		return <>로딩중</>
	}

	return (
		<ProductListTemplate
			page={page}
			total={data.data.total}
			filter={filter}
			products={data.data.data}
		/>
	)
}

export default ProductSearchPage
