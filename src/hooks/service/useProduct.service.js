import { useMutation, useQuery } from 'react-query'

import productAxios from '../../apis/service/product.api'
import API_KEY from '../../consts/ApiKey'
import { NETWORK } from '../../consts/api'

const useViewListApi = {
	usePostRegisterProduct: productInfo => {
		const { data } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, productInfo.id],
			() => productAxios.addRegisterProduct(productInfo),
			{
				retry: NETWORK.RETRY_COUNT,
			},
		)
		return { data }
	},

	usePatchProductInfo: productInfo => {
		const { data } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, 'patch'],
			() => productAxios.patchProductInfo(productInfo),
			{
				retry: 1,
			},
		)
		return { data }
	},

	useDeleteProduct: productId => {
		const { data } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, 'delete'],
			() => productAxios.deleteProduct(productId),
			{
				retry: 1,
			},
		)
		return { data }
	},

	usePostChangeStatusProduct: (productId,socket) => {
		const { data } = useQuery(
			[API_KEY.PRODUCT, API_KEY.UPDATE, 'status'],
			() => productAxios.postCompleteProduct(productId,socket),
			{
				retry: 1,
			},
		)
		return { data }
	},

	usePostWishAdd: productId => {
		const { mutateAsync } = useMutation([API_KEY.PRODUCT, API_KEY.LIKE], () =>
			productAxios.postWishAdd(productId),
		)
		return { mutateAsync }
	},

	useGetChartData: (keyword, start, end) => {
		const { data } = useQuery([API_KEY.DETAIL + keyword], () =>
			productAxios.getProductChartData(keyword, start, end),
		)
		return { data }
	},
}

export default useViewListApi
