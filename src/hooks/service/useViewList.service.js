import { useMutation, useQuery } from 'react-query'

import { queryClient } from '../../App'
import viewListAxios from '../../apis/service/viewlist.api'
import API_KEY from '../../consts/ApiKey'
import { ERROR_MESSAGE, NETWORK } from '../../consts/api'

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
				onMutate: async product => {
					await queryClient.cancelQueries([API_KEY.VIEWLIST])
					const previousProduct = queryClient.getQueryData([API_KEY.VIEWLIST])
					queryClient.setQueryData([API_KEY.VIEWLIST], prev => {
						if (
							prev.data.productList.filter(
								prev => prev.Product.idx === product.idx,
							) === 0
						) {
							const newProduct = { ...prev }
							newProduct.data.productList = [
								product,
								...newProduct.data.productList,
							]
							if (newProduct.data.productList.length > 5) {
								newProduct.data.productList.length = 5
							}
							return newProduct
						}
						return previousProduct
					})
					return { previousProduct }
				},
				onError: (err, newProduct, context) => {
					alert(ERROR_MESSAGE)
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
				onMutate: async deleteId => {
					await queryClient.cancelQueries([API_KEY.VIEWLIST])
					const previousProduct = queryClient.getQueryData([API_KEY.VIEWLIST])
					queryClient.setQueryData([API_KEY.VIEWLIST], prev => {
						const newProduct = { ...prev }
						newProduct.data.productList = newProduct.data.productList.filter(
							product => product.idx !== deleteId,
						)
						return newProduct
					})
					return { previousProduct }
				},
				onError: (err, newProduct, context) => {
					alert(ERROR_MESSAGE)
					queryClient.setQueryData([API_KEY.VIEWLIST], context.previousProduct)
				},
				onSettled: () => queryClient.invalidateQueries([API_KEY.VIEWLIST]),
			},
		)
		return { mutate }
	},
}

export default useViewListApi
