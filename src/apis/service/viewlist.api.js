import axios from 'axios'

import API_KEY from '../../consts/ApiKey'

const viewListAxios = {
	getRecentProduct: async () => {
		return await axios.get(API_KEY.PRODUCT + API_KEY.VIEWLIST)
	},

	postRecentProduct: async productId => {
		return await axios.post(
			API_KEY.PRODUCT + API_KEY.VIEWLIST + `/${productId}`,
		)
	},

	deleteRecentProduct: async productId => {
		return await axios.delete(
			API_KEY.PRODUCT + API_KEY.VIEWLIST + `/${productId}`,
		)
	},
}

export default viewListAxios
