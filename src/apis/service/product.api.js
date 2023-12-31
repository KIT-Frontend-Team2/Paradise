import API_KEY from '../../consts/ApiKey'
import { axiosInstance } from '../axiosInstance'

const productAxios = {
	addRegisterProduct: productInfo => {
		return axiosInstance.post(API_KEY.API + API_KEY.PRODUCT, productInfo, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	postWishAdd: prod_idx => {
		return axiosInstance.post(API_KEY.API + API_KEY.PRODUCT + API_KEY.LIKE, {
			prod_idx,
		})
	},

	patchProductInfo: productInfo => {
		return axiosInstance.patch(API_KEY.API + API_KEY.PRODUCT, productInfo, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	deleteProduct: prod_idx => {
		return axiosInstance.delete(API_KEY.API + API_KEY.PRODUCT, {
			params: { prod_idx },
		})
	},

	postCompleteProduct: (prod_idx, token) => {
		return axiosInstance.post(
			API_KEY.API + API_KEY.PRODUCT + '/sale-complete',
			{
				prod_idx,
				token,
			},
		)
	},

	getProductChartData: (keyword, start, end) => {
		return axiosInstance.get(API_KEY.API + API_KEY.PRODUCT + '/quote', {
			params: { keyword, start, end },
		})
	},
}

export default productAxios
