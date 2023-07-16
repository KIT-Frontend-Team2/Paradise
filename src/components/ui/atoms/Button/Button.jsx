import PropTypes from 'prop-types'

import S from './style'

const Button = ({ ...args }) => {
	return (
		<S.Button {...args}>
			{args.starticon}
			{args.label}
			{args.endicon}
		</S.Button>
	)
}

Button.propTypes = {
	/**
	 * 버튼내의 글자를 입력해주세요
	 */
	label: PropTypes.string.isRequired,
	/**
	 * 버튼의 사이즈를 골라주세요
	 */
	size: PropTypes.oneOf(['small', 'medium', 'medium-1', 'large', 'full']),
	/**
	 * 버튼의 형식을 골라주세요
	 */
	variant: PropTypes.oneOf([
		'primary',
		'primary-outlined',
		'gray-outlined',
		'outlined',
		'cancel',
	]),
	/**
	 * 버튼의 활성화 상태를 골라주세요
	 */
	disabled: PropTypes.bool,
	/**
	 * 버튼의 추가설정을 할 수 있습니다.
	 */
	sx: PropTypes.shape({}),
}

Button.defaultProps = {
	size: 'medium',
	variant: 'primary',
	disabled: false,
}
export default Button
