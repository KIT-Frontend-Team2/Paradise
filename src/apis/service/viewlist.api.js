import API_KEY from '../../consts/ApiKey'
import { axiosInstance } from '../axiosInstance'

const viewListAxios = {
	getRecentProduct: () => {
		return axiosInstance.get(API_KEY.PRODUCT + API_KEY.VIEWLIST)
	},

	postRecentProduct: productId => {
		return axiosInstance.post(
			API_KEY.PRODUCT + API_KEY.VIEWLIST + `/${productId}`,
		)
	},

	deleteRecentProduct: productId => {
		return axiosInstance.delete(
			API_KEY.PRODUCT + API_KEY.VIEWLIST + `/${productId}`,
		)
	},
}

export default viewListAxios
