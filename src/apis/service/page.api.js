import axios from 'axios'

import API_KEY from '../../consts/ApiKey'

export const getPageAxios = {
	getDetailProduct: async productId => {
		try {
			return await axios.get(API_KEY.DETAIL + '/' + productId)
		} catch (err) {
			throw new Error(err)
		}
	},

	getMainProductList: async () => {
		try {
			return await axios.get(API_KEY.LIST)
		} catch (err) {
			throw new Error(err)
		}
	},

	getProductList: async (optionKey, page) => {
		try {
			return await axios.get(API_KEY.LIST + '/' + optionKey, {
				params: {
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	},

	getSearchKeyWordList: async (keyword, page) => {
		try {
			return await axios.get(API_KEY.SEARCH + '/' + keyword, {
				params: {
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	},

	getSearchUserNameList: async (userName, page) => {
		try {
			return await axios.get(API_KEY.SEARCH + API_KEY.USER + '/' + userName, {
				params: {
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	},
}

export default getPageAxios
