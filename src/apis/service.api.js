import axios from 'axios'

import API_KEY from '../consts/ApiKey'

export const service = {
	async getDetailPage(productId) {
		try {
			return await axios.get(API_KEY.DETAIL + '/' + productId)
		} catch (err) {
			throw new Error(err)
		}
	},

	async getMainPage() {
		try {
			return await axios.get(API_KEY.LIST)
		} catch (err) {
			throw new Error(err)
		}
	},

	async getListPage(optionKey, page) {
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

	async getSearchKeyWord(keyWord, page) {
		try {
			return await axios.get(API_KEY.SEARCH + '/' + keyWord, {
				params: {
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	},
}
