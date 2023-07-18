import PropTypes from 'prop-types'

import S from './style'

const Input = ({ ...args }) => {
	return (
		<S.InputBox {...args}>
			<S.Input {...args} readOnly={args.readOnly} />
			{args.error && <span className="error">{args.error}</span>}
		</S.InputBox>
	)
}

Input.propTypes = {
	/**
	 * plceholder를 입력해주세요
	 */
	placeholder: PropTypes.string,
	/**
	 * error 메세지를 입력해주세요
	 */
	error: PropTypes.string,
	/**
	 * input 넓이를 입력해주세요
	 */
	width: PropTypes.string,
	/**
	 * readonly 여부를 선택해주세요
	 */
	readOnly: PropTypes.bool,
}

export default Input
