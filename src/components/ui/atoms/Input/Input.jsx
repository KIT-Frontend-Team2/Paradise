import PropTypes from 'prop-types'
import React from 'react'

import S from './style'

const Input = React.forwardRef(({ error, ...args }, ref) => {
	return (
		<S.InputBox {...args}>
			<S.Input error={error} {...args} ref={ref} readOnly={args.readOnly} />
			{error && <span className="error">{error}</span>}
		</S.InputBox>
	)
})

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
