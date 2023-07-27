const reviewService = () => {
	const makeReview = (productId, reviewInfo) => {
		console.log(productId, '해당 상품의 리뷰를 등록합니다.', reviewInfo)
	}

	const getReviewList = page => {
		console.log(page, '리뷰 목록을 조회합니다.')
	}

	const getDetailReview = reviewId => {
		console.log(reviewId, '해당 리뷰의 상세정보를 조회합니다.')
	}

	const modifyReview = (productId, reviewInfo) => {
		console.log(productId, '해당 상품의 리뷰를 수정합니다.', reviewInfo)
	}

	const deleteReview = reviewId => {
		console.log(reviewId, '해당 상품의 리뷰를 삭제합니다.')
	}

	return {
		makeReview,
		getReviewList,
		getDetailReview,
		modifyReview,
		deleteReview,
	}
}

export default reviewService
