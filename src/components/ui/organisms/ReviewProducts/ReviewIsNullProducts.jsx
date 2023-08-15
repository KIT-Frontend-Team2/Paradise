import React from 'react'

import ReviewCard from '../../molecules/ReviewCard/ReviewCard'
import ReviewIsNullCard from './ReviewIsNullCard'

const ReviewProducts = ({ reviewList, handleOpen, detailOpen }) => (
	<>
		{reviewList.map(review_info => {
			const { img_url, price, title } = review_info.Product
			if (review_info.Review === null) {
				return (
					<ReviewIsNullCard
						key={review_info.idx}
						id={review_info.idx}
						name={title}
						img_url={img_url}
						time={review_info.created_at}
						price={price}
						handleOpen={handleOpen}
					/>
				)
			}
			return (
				<ReviewCard
					key={review_info.idx}
					detailOpen={detailOpen}
					review_info={review_info}
				/>
			)
		})}
	</>
)
export default ReviewProducts
