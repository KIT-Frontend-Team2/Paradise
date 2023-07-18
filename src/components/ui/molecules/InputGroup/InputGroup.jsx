import PropTypes from 'prop-types'

import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import S from './style'

const InputGroup = ({ ...args }) => {
	return <S.InputGroup {...args}>{args.children}</S.InputGroup>
}

InputGroup.propTypes = {
	/**
	 * flex 형식을 골라주세요.
	 */
	display: PropTypes.oneOf(['flex', 'inline-flex']),
}

InputGroup.defaultProps = {
	display: 'flex',
	children: (
		<>
			<Input placeholder={'이메일을 입력해주세요'} />
			<Button label={'중복확인'} variant={'outlined'} />
		</>
	),
}

export default InputGroup
