import PropTypes from 'prop-types'

import S from './style'

const Input = ({ ...args }) => {
	return <S.Input {...args} />
}

Input.propTypes = {
	/**
	 * plceholder를 입력해주세요
	 */
	placeholder: PropTypes.string,
}

export default Input
