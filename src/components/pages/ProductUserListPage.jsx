import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductSearchUserTemplate from '../templates/ProductSearchUserTemplate/ProductSearchUserTemplate'

const ProductUserListPage = () => {
	const { getSearchUserPage } = LoadApi()
	const { userId } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data, isError, isLoading } = getSearchUserPage(userId, page)
	if (isError) {
		return <>에러</>
	}

	if (isLoading) {
		return <>로딩중</>
	}

	return (
		<ProductSearchUserTemplate
			page={page}
			total={data.data.total}
			userName={userId}
			products={data.data.data}
		/>
	)
}

export default ProductUserListPage
