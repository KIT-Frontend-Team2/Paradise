import { useQuery } from 'react-query'

import { service } from '../../apis/service.api'
import API_KEY from '../../consts/ApiKey'
import { queryConfig } from './@config'

const useLoadApi = {
	MainPage: () => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.LIST],
			() => service.getMainPage(),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	},

	ListPage: (optionKey, page) => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.LIST, optionKey, page],
			() => service.getListPage(optionKey, page),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	},

	DetailPage: productId => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.PRODUCT, productId],
			() => service.getDetailPage(productId),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	},

	SearchPage: (keyWord, page) => {
		const { data, isLoading, isError } = useQuery(
			[API_KEY.SEARCH, keyWord, page],
			() => service.getSearchKeyWord(keyWord, page),
			{ ...queryConfig },
		)

		return { data, isLoading, isError }
	},
}

export default useLoadApi
