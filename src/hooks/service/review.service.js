import {useMutation, useQuery} from "react-query";
import reviewApi from "../../apis/service/review.api";
import API_KEY from "../../consts/ApiKey";

const reviewService = {
    postReview: () => {
        const {mutateAsync} = useMutation((review) => reviewApi.postReview(review.payList_idx, review.review_info))
        return {mutateAsync}
    },

    getReview: (page) => {
        const {data} = useQuery([API_KEY.REVIEW, API_KEY.LIST, page], () => reviewApi.getReviewList(page))
        return {data}
    },

    getDetailReview: (review_idx) => {
        const {data} = useQuery([API_KEY.REVIEW, review_idx], () => reviewApi.getDetailReview(review_idx))
        return {data}
    },

    patchReview: () => {
        const {mutateAsync} = useMutation((review) => reviewApi.postReview(review.payList_idx, review.review_info))
        return {mutateAsync}
    },

    deleteReview: () => {
        const {mutateAsync} = useMutation(() => reviewApi.deleteReview())
        return {mutateAsync}
    }
}

export default reviewService