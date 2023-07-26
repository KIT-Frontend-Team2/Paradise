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
		const { mutate, isError, isLoading } = useMutation({
			mutationFn: viewListAxios.postRecentProduct(productId),
			mutationKey: [API_KEY.VIEWLIST, productId],
			useErrorBoundary: false,
			retry: 2,
			meta: false,
			onMutate: async newProduct => {
				await queryClient.cancelQueries({ queryKey: [API_KEY.VIEWLIST] })
				console.log(productId, '추가요청 보냄')
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
			onError: (err, newProduct, context) => {
				queryClient.setQueryData([API_KEY.VIEWLIST], context.previousProduct)
			},
			onSettled: () => {
				// queryClient.invalidateQueries({queryKey: [API_KEY.VIEWLIST]})
			},
		})
		return { mutate, isError, isLoading }
	},

	useDeleteViewList: productId => {
		const { mutate, isLoading, isError } = useMutation({
			mutationFn: viewListAxios.deleteRecentProduct(productId),
			mutationKey: [API_KEY.VIEWLIST, productId],
			useErrorBoundary: false,
			retry: 2,
			meta: false,
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
			onError: (err, deleteId, context) => {
				queryClient.setQueryData([API_KEY.VIEWLIST], context.previousProduct)
			},
			onSettled: () => {
				// queryClient.invalidateQueries({queryKey: [API_KEY.VIEWLIST]})
			},
		})
		return { mutate, isError, isLoading }
	},
}

export default useViewListApi
