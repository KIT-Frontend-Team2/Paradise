import Tooltip from '@mui/material/Tooltip'
import PropTypes from 'prop-types'

/**
 * Failed prop type: Invalid prop `children` supplied to `ForwardRef(Tooltip) 오류가 생기지만 실제 Mui 라이브러리를 사용하여도 생기는 오류입니다.
 * 지장 없는 오류입니다.
 */
export const MTooltip = ({ title, children, ...rest }) => {
	return (
		<Tooltip title={title} {...rest}>
			{children}
		</Tooltip>
	)
}

MTooltip.propTypes = {
	/**
	 * 타이틀의 내용을 적어주세요
	 */
	title: PropTypes.string,
	/**
	 * 나타날 위치를 정해주세요
	 */
	placement: PropTypes.oneOf([
		'top-start',
		'top',
		'top-end',
		'left-start',
		'left',
		'left-end',
		'right-start',
		'right',
		'right-end',
		'bottom-start',
		'bottom',
		'bottom-end',
	]),
}

MTooltip.defaultProps = {
	title: '텍스트로 이동합니다.',
}

export default MTooltip
