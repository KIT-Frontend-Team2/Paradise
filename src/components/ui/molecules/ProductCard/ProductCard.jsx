import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox } from '@mui/material'
import React from 'react'

const ProductCard = ({
	size,
	id,
	name,
	price,
	isLike,
	img_url,
	time,
	like,
	chat_count,
}) => (
	<S.Card size={size}>
		<Checkbox
			{...label}
			checked={isLike}
			icon={<FavoriteBorder />}
			checkedIcon={<Favorite />}
		/>
	</S.Card>
)
export default ProductCard

const S = {}

S.Card = {}
