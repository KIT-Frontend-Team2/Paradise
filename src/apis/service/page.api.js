import API_KEY from '../../consts/ApiKey'
import { axiosInstance } from '../axiosInstance'

export const getPageAxios = {
	getDetailProduct: productId => {
		return axiosInstance.get(API_KEY.DETAIL + '/' + productId)
	},

	getMainProductList: () => {
		return axiosInstance.get(API_KEY.LIST)
	},

	getProductList: (optionKey, page) => {
		return axiosInstance.get(API_KEY.LIST + '/' + optionKey, {
			params: {
				page,
			},
		})
	},

	getSearchKeyWordList: (keyword, page) => {
		return axiosInstance.get(API_KEY.SEARCH + '/' + keyword, {
			params: {
				page,
			},
		})
	},

	getSearchUserNameList: (userName, page) => {
		return axiosInstance.get(API_KEY.SEARCH + API_KEY.USER + '/' + userName, {
			params: {
				page,
			},
		})
	},
}

export default getPageAxios
