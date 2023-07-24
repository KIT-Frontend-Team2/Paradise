const reviewService = {
	makeReview(productId, reviewInfo) {
		console.log(productId, '해당 상품의 리뷰를 등록합니다.', reviewInfo)
	},

	getReviewList(page) {
		console.log(page, '리뷰 목록을 조회합니다.')
	},

	getDetailReview(reviewId) {
		console.log(reviewId, '해당 리뷰의 상세정보를 조회합니다.')
	},

	modifyReview(productId, reviewInfo) {
		console.log(productId, '해당 상품의 리뷰를 수정합니다.', reviewInfo)
	},

	deleteReview(reviewId) {
		console.log(reviewId, '해당 상품의 리뷰를 삭제합니다.')
	},
}
