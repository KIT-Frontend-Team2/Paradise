import ReviewIsNullCard from './ReviewIsNullCard'

const ReviewIsNullProducts = ({ handleOpen, reviewIsNullProducts }) => (
	<>
		{reviewIsNullProducts.map(review_info => {
			const { img_url, price, title } = review_info.Product
			return (
				<ReviewIsNullCard
					key={review_info.idx}
					size={200}
					id={review_info.idx}
					name={title}
					img_url={img_url}
					time={review_info.created_at}
					price={price}
					handleOpen={handleOpen}
				/>
			)
		})}
	</>
)
export default ReviewIsNullProducts
