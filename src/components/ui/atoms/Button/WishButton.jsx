import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PropTypes from 'prop-types'

import S from './style'

const WishButton = ({ ...args }) => {
	return (
		<S.WishButton {...args}>
			{args.variant === 'wish-on' ? <FavoriteIcon /> : <FavoriteBorderIcon />}
		</S.WishButton>
	)
}

WishButton.propTypes = {
	/**
	 * 버튼의 형식을 골라주세요
	 */
	variant: PropTypes.oneOf(['wish', 'wish-on']),
}

WishButton.defaultProps = {
	variant: 'wish',
}

export default WishButton
