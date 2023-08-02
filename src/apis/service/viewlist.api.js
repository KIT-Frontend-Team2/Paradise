import API_KEY from '../../consts/ApiKey'
import { axiosInstance } from '../axiosInstance'

const viewListAxios = {
	getRecentProduct: () => {
		return axiosInstance.get(API_KEY.API + API_KEY.PRODUCT + API_KEY.VIEWLIST)
	},

	postRecentProduct: prod_idx => {
		return axiosInstance.post(
			API_KEY.API + API_KEY.PRODUCT + API_KEY.VIEWLIST,
			{
				prod_idx,
			},
		)
	},

	deleteRecentProduct: prod_idx => {
		return axiosInstance.delete(
			API_KEY.API + API_KEY.PRODUCT + API_KEY.VIEWLIST,
			{
				params: {
					prod_idx,
				},
			},
		)
	},
}

export default viewListAxios
