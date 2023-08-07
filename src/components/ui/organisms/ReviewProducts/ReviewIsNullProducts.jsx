import ReviewIsNullCard from "./ReviewIsNullCard";

const ReviewIsNullProducts = ({reviewIsNullProducts}) => (
    <>
        {reviewIsNullProducts.map((review_info) => {
            const { idx, img_url, price, title} = review_info.Product
            return <ReviewIsNullCard key={idx} size={200} id={idx} name={title} img_url={img_url} time={review_info.created_at}
                                     price={price}/>
        })
        }
    </>
)
export default ReviewIsNullProducts;