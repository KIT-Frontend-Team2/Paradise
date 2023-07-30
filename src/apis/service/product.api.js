import axios from 'axios'

import API_KEY from '../../consts/ApiKey'

const productAxios = {
	addRegisterProduct: async productInfo => {
		return await axios.post(API_KEY.PRODUCT + API_KEY.UPDATE, {
			params: {
				...productInfo,
			},
		})
	},

	postWishAdd: async productId => {
		return await axios.post(API_KEY.PRODUCT + API_KEY.LIKE + `/${productId}`)
	},

	patchProductInfo: async productInfo => {
		return await axios.patch(
			API_KEY.PRODUCT + API_KEY.UPDATE + `/${productInfo.id}`,
			_,
			{
				params: { ...productInfo },
			},
		)
	},

	deleteProduct: async productId => {
		return await axios.delete(
			API_KEY.PRODUCT + API_KEY.UPDATE + `/${productId}`,
		)
	},

	postCompleteProduct: async productId => {
		return await axios.post(API_KEY.PRODUCT + API_KEY.UPDATE + `/${productId}`)
	},
}

export default productAxios
