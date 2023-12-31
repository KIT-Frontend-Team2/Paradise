import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import LoadApi from '../../hooks/pageQuery/useLoadPage'
import ProductListTemplate from '../templates/ProductListTemplate/ProductListTemplate'

const ProductUserListPage = () => {
	const { getSearchUserPage } = LoadApi()
	const { userId } = useParams()
	const [searchParam, _] = useSearchParams()
	const page = searchParam.get('page') || 1
	const { data } = getSearchUserPage(userId, page)
	const { product, pagination } = data.data
	return (
		<ProductListTemplate
			pagination={pagination}
			products={product}
			title={userId}
			intro={'님의 상품 목록입니다.'}
		/>
	)
}

export default ProductUserListPage
