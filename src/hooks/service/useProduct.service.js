import { useMutation, useQuery } from 'react-query'

import productAxios from '../../apis/service/product.api'
import API_KEY from '../../consts/ApiKey'

const useViewListApi = {
	usePostRegisterProduct: productInfo => {
		const { data, isError, isLoading } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, productInfo.id],
			() => productAxios.addRegisterProduct(productInfo),
			{
				retry: 3,
			},
		)
		return { data, isError, isLoading }
	},

	usePatchProductInfo: productInfo => {
		const { data, isError, isLoading } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, 'patch'],
			() => productAxios.patchProductInfo(productInfo),
			{
				retry: 1,
			},
		)
		return { data, isError, isLoading }
	},

	useDeleteProduct: productId => {
		const { data, isError, isLoading } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, 'delete'],
			() => productAxios.deleteProduct(productId),
			{
				retry: 1,
			},
		)
		return { data, isError, isLoading }
	},

	usePostChangeStatusProduct: productId => {
		const { data, isError, isLoading } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, 'status'],
			() => productAxios.postCompleteProduct(productId),
			{
				retry: 1,
			},
		)
		return { data, isError, isLoading }
	},

	usePostWishAdd: productId => {
		const { mutate } = useMutation(
			[API_KEY.PRODUCT, API_KEY.LIKE],
			() => productAxios.postWishAdd(productId),
			{
				onMutate: ([originState, setState]) => {
					setState(prev => !prev)
					return { originState, setState }
				},
				onError: (error, variables, context) => {
					context.setState(context.originState)
				},
				onSuccess: (data, variables, context) => {
					context.setState(!context.originState)
				},
			},
		)
		return { mutate }
	},
}

export default useViewListApi
