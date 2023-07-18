import axios from 'axios'

import API_KEY from '../consts/ApiKey'

export const service = {
	async getDetailPage(productId) {
		return await axios.get(API_KEY.DETAIL + '/' + productId)
	},
}
