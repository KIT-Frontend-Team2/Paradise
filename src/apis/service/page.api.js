import axios from 'axios'
import API_KEY from '../../consts/ApiKey'


export const getPageApi = () => {
	const getDetailProduct = async productId => {
		try {
			return await axios.get(API_KEY.DETAIL + '/' + productId)
		} catch (err) {
			throw new Error(err)
		}
	}

	const getMainProductList = async () => {
		try {
			return await axios.get(API_KEY.LIST)
		} catch (err) {
			throw new Error(err)
		}
	}

	const getProductList = async (optionKey, page) => {
		try {
			return await axios.get(API_KEY.LIST + '/' + optionKey, {
				params: {
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	}

	const getSearchKeyWordList = async (keyword, page) => {
		try {
			return await axios.get(API_KEY.SEARCH, {
				params: {
					keyword,
					page,
				},
			})
		} catch (err) {
			throw new Error(err)
		}
	}

	return {
		getDetailProduct,
		getMainProductList,
		getSearchKeyWordList,
		getProductList,
	}
}
