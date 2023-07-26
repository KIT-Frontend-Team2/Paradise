import { useMutation, useQuery } from 'react-query'

import { queryClient } from '../../App'
import viewListAxios from '../../apis/service/viewlist.api'
import API_KEY from '../../consts/ApiKey'

const useViewListApi = {
	useGetViewList: () => {
		const { data, isError, isLoading } = useQuery(
			[API_KEY.VIEWLIST],
			() => viewListAxios.getRecentProduct(),
			{
				retry: false,
				refetchOnWindowFocus: false,
				cacheTime: 1000 * 60 * 20,
			},
		)

		return { data, isError, isLoading }
	},

	usePostViewList: productId => {
		const { mutate } = useMutation(
			() => viewListAxios.postRecentProduct(productId),
			{
				onMutate: async newProduct => {
					await queryClient.cancelQueries({ queryKey: [API_KEY.VIEWLIST] })
					const previousProduct = queryClient.getQueryData([API_KEY.VIEWLIST])
					queryClient.setQueryData([API_KEY.VIEWLIST], prev => {
						if (
							prev.data.products.filter(product => product.id === newProduct.id)
								.length > 0
						) {
							return prev
						} else {
							const prevProduct = { ...prev }
							prevProduct.data.products = [
								newProduct,
								...prevProduct.data.products,
							]
							if (prevProduct.data.products.length > 5) {
								prevProduct.data.products.length = 5
							}
							return prevProduct
						}
					})
					return { previousProduct }
				},
			},
		)
		return { mutate }
	},

	useDeleteViewList: productId => {
		const { mutate } = useMutation(
			() => viewListAxios.deleteRecentProduct(productId),
			{
				onMutate: async deleteId => {
					await queryClient.cancelQueries({ queryKey: [API_KEY.VIEWLIST] })
					console.log(productId, '삭제 보냄')
					const previousProduct = queryClient.getQueryData([API_KEY.VIEWLIST])
					queryClient.setQueryData([API_KEY.VIEWLIST], prev => {
						const newProduct = { ...prev }
						newProduct.data.products = newProduct.data.products.filter(
							product => product.id !== deleteId,
						)
						return newProduct
					})
					return { previousProduct }
				},
			},
		)

		return { mutate }
	},
}

export default useViewListApi
