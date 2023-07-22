import PropTypes from 'prop-types'

import S from './style'

const Tag = ({ ...args }) => {
	return (
		<S.Tag {...args}>
			<span>{args.label}</span>
			{args.endicon}
		</S.Tag>
	)
}

Tag.propTypes = {
	/**
	 * 태그내의 글자를 입력해주세요
	 */
	label: PropTypes.string.isRequired,
	/**
	 * 태그의 사이즈를 골라주세요
	 */
	size: PropTypes.oneOf(['small', 'medium']),
}

Tag.defaultProps = {
	size: 'medium',
}
export default Tag
