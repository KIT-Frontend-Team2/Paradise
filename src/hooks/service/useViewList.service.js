import { useMutation, useQuery } from 'react-query'

import { queryClient } from '../../App'
import viewListAxios from '../../apis/service/viewlist.api'
import API_KEY from '../../consts/ApiKey'
import { ERROR_MESSAGE, NETWORK } from '../../consts/api'
import toastMessage from "../../utils/toast-message";

const useViewListApi = {
	useGetViewList: () => {
		const { data } = useQuery(
			[API_KEY.VIEWLIST],
			() => viewListAxios.getRecentProduct(),
			{
				retry: NETWORK.RETRY_COUNT,
				refetchOnWindowFocus: false,
			},
		)

		return { data }
	},

	usePostViewList: productId => {
		const { mutate } = useMutation(
			() => viewListAxios.postRecentProduct(productId),
			{
				onError: (err, newProduct, context) => {
					toastMessage.error(ERROR_MESSAGE)
					queryClient.setQueryData([API_KEY.VIEWLIST], context.previousProduct)
				},
				onSettled: () => queryClient.invalidateQueries([API_KEY.VIEWLIST]),
			},
		)
		return { mutate }
	},

	useDeleteViewList: productId => {
		const { mutate } = useMutation(
			() => viewListAxios.deleteRecentProduct(productId),
			{
				onError: (err, newProduct, context) => {
					toastMessage.error(ERROR_MESSAGE)
					queryClient.setQueryData([API_KEY.VIEWLIST], context.previousProduct)
				},
				onSettled: () => queryClient.invalidateQueries([API_KEY.VIEWLIST]),
			},
		)
		return { mutate }
	},
}

export default useViewListApi
