import API_KEY from '../../consts/ApiKey'
import { axiosInstance } from '../axiosInstance'

const reviewService = {
	postReview: reviewInfo => {
		return axiosInstance.post(API_KEY.API + API_KEY.REVIEW, {
			params: {
				...reviewInfo,
			},
		})
	},

	getReviewList: page => {
		return axiosInstance.get(API_KEY.API + API_KEY.REVIEW, {
			params: {
				page,
			},
		})
	},

	getDetailReview: review_idx => {
		return axiosInstance.get(API_KEY.API + API_KEY.REVIEW + '/get', {
			params: { review_idx },
		})
	},

	modifyReview: (review_idx, reviewInfo) => {
		return axiosInstance.patch(
			API_KEY.API + API_KEY.REVIEW + `/?review_idx=${review_idx}`,
			{ ...reviewInfo },
		)
	},

	deleteReview: review_idx => {
		return axiosInstance.delete(API_KEY.API + API_KEY.REVIEW, {
			params: { review_idx },
		})
	},
}

export default reviewService
