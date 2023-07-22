import { Chip } from '@mui/material'
import PropTypes from 'prop-types'

export const MChip = ({ ...args }) => {
	return <Chip {...args} label={`# ${args.label}`} />
}

MChip.propTypes = {
	/**
	 * 태그내의 문자를 입력해주세요
	 */
	label: PropTypes.string.isRequired,
	/**
	 * 태그의 형태를 골라주세요
	 */
	variant: PropTypes.oneOf([undefined, 'outlined']),
	/**
	 * 태그의 사이즈를 골라주세요
	 */
	size: PropTypes.oneOf(['medium', 'small']),
	/**
	 * 태그의 색깔을 고를 수 있습니다.
	 */
	color: PropTypes.oneOf([
		undefined,
		'primary',
		'secondary',
		'error',
		'info',
		'success',
		'warning',
	]),
	/**
	 * 태그 앞에 아바타를 넣을 수 있습니다.
	 */
	avatar: PropTypes.elementType,
	/**
	 * 태그 앞에 아이콘을 넣을 수 있습니다.
	 */
	icon: PropTypes.elementType,
	/**
	 *  태그 뒤에 아이콘을 넣을 수 있습니다.
	 */
	deleteIcon: PropTypes.elementType,
	/**
	 * 태그의 추가 설정을 할 수 있습니다.
	 */
	sx: PropTypes.shape({}),
}
