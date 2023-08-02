import API_KEY from '../../consts/ApiKey'
import { axiosInstance } from '../axiosInstance'

export const getPageAxios = {
	getMainProductList: () => {
		return axiosInstance.get(API_KEY.API + API_KEY.PRODUCT)
	},

	getDetailProduct: prod_idx => {
		return axiosInstance.get(API_KEY.API + API_KEY.PRODUCT + API_KEY.DETAIL, {
			params: { prod_idx },
		})
	},

	getProductList: (category, page, status) => {
		return axiosInstance.get(API_KEY.API + API_KEY.PRODUCT + API_KEY.SEARCH, {
			params: {
				category,
				page,
				status,
			},
		})
	},

	getSearchKeyWordList: (keyword, page) => {
		return axiosInstance.get(API_KEY.API + API_KEY.PRODUCT + API_KEY.SEARCH, {
			params: {
				keyword,
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
