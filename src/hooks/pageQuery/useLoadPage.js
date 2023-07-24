import { service } from 'apis/service.api'
import API_KEY from 'consts/ApiKey'
import { useQuery } from 'react-query'

import { queryConfig } from './@config'

const LoadApi = () => {
	const {
		getSearchKeyWordList,
		getProductList,
		getMainProductList,
		getDetailProduct,
	} = service()

	const getMainPage = () => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.LIST],
			() => getMainProductList(),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	}

	const getListPage = (optionKey, page) => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.LIST, optionKey, page],
			() => getProductList(optionKey, page),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	}

	const getDetailPage = productId => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.PRODUCT, productId],
			() => getDetailProduct(productId),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	}

	const getSearchPage = (keyword, page) => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.SEARCH, keyword, page],
			() => getSearchKeyWordList(keyword, page),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	}

	return { getDetailPage, getSearchPage, getMainPage, getListPage }
}

export default LoadApi
