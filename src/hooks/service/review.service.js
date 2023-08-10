import { useMutation, useQuery } from 'react-query'

import { queryClient } from '../../App'
import reviewApi from '../../apis/service/review.api'
import API_KEY from '../../consts/ApiKey'

// import {queryClient} from "../../App";

const reviewService = {
	postReview: page => {
		const { mutateAsync: postMutate } = useMutation(
			review => reviewApi.postReview(review.ReviewId, review.formData),
			{
				onSuccess: () =>
					queryClient.invalidateQueries([API_KEY.REVIEW, API_KEY.LIST, page]),
			},
		)
		return { postMutate }
	},

	getReview: page => {
		const { data } = useQuery([API_KEY.REVIEW, API_KEY.LIST, page], () =>
			reviewApi.getReviewList(page),
		)
		return { data }
	},

	getDetailReview: review_idx => {
		const { data } = useQuery([API_KEY.REVIEW, review_idx], () =>
			reviewApi.getDetailReview(review_idx),
		)
		return { data }
	},

	patchReview: page => {
		const { mutateAsync: patchMutate } = useMutation(
			review => reviewApi.modifyReview(review.idx, review.formData),
			{
				onSuccess: (data, variables) => {
					queryClient.invalidateQueries([API_KEY.REVIEW, variables.idx])
					queryClient.invalidateQueries([API_KEY.REVIEW, API_KEY.LIST, page])
				},
			},
		)
		return { patchMutate }
	},
	deleteReview: page => {
		const { mutateAsync: deleteMutate } = useMutation(
			review_idx => reviewApi.deleteReview(review_idx),
			{
				onSuccess: () => alert('삭제되었습니다.'),
				onSettled: () =>
					queryClient.invalidateQueries([API_KEY.REVIEW, API_KEY.LIST, page]),
			},
		)
		return { deleteMutate }
	},
}

export default reviewService
