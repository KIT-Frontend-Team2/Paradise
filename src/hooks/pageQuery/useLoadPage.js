import API_KEY from 'consts/ApiKey'
import { useQuery } from 'react-query'

import getPageAxios from '../../apis/service/page.api'
import { queryConfig } from './@config'

const LoadApi = () => {
	const getMainPage = () => {
		const { data } = useQuery(
			[API_KEY.LIST],
			() => getPageAxios.getMainProductList(),
			{ ...queryConfig },
		)

		return { data }
	}

	const getListPage = (optionKey, page) => {
		const { data } = useQuery(
			[API_KEY.LIST, optionKey, page],
			() => getPageAxios.getProductList(optionKey, page),
			{ ...queryConfig },
		)

		return { data }
	}

	const getDetailPage = productId => {
		const { data } = useQuery(
			[API_KEY.PRODUCT, productId],
			() => getPageAxios.getDetailProduct(productId),
			{ ...queryConfig, suspense: true },
		)

		return { data }
	}

	const getSearchPage = (keyword, page) => {
		const { data } = useQuery(
			[API_KEY.SEARCH, keyword, page],
			() => getPageAxios.getSearchKeyWordList(keyword, page),
			{ ...queryConfig },
		)

		return { data }
	}

	const getSearchUserPage = (userName, page) => {
		const { data } = useQuery(
			[API_KEY.SEARCH, API_KEY.USER, userName, page],
			() => getPageAxios.getSearchUserNameList(userName, page),
			{ ...queryConfig },
		)

		return { data }
	}
	return {
		getDetailPage,
		getSearchPage,
		getMainPage,
		getListPage,
		getSearchUserPage,
	}
}

export default LoadApi
