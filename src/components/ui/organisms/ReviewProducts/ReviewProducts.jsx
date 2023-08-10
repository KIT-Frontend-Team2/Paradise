import React from 'react'

import ReviewCard from '../../molecules/ReviewCard/ReviewCard'

const ReviewProducts = ({ reviewProducts, detailOpen }) => (
	<>
		{reviewProducts.map(review_info => (
			<ReviewCard
				key={review_info.idx}
				detailOpen={detailOpen}
				review_info={review_info}
			/>
		))}
	</>
)

export default ReviewProducts
