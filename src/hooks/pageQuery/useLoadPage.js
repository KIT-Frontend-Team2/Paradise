import { useQuery } from 'react-query'

import { service } from '../../apis/service.api'
import API_KEY from '../../consts/ApiKey'
import { queryConfig } from './@config'

export const useLoadDetailPage = productId => {
	const { data, isLoading, isError } = useQuery(
		[API_KEY.PRODUCT, productId],
		() => service.getDetailPage(productId),
		{ ...queryConfig },
	)

	return { data, isLoading, isError }
}
