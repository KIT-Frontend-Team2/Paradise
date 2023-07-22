import { Skeleton } from '@mui/material'
import PropTypes from 'prop-types'

export const MSkeleton = ({ ...args }) => {
	return <Skeleton {...args} />
}

MSkeleton.propTypes = {
	/**
	 * 스켈레톤의 형태를 골라주세요
	 */
	variant: PropTypes.oneOf(['text', 'circular', 'rectangular', 'rounded']),
	/**
	 * 가로길이를 적어주세요
	 */
	width: PropTypes.number,
	/**
	 * 세로길이를 적어주세요
	 */
	height: PropTypes.number,
	/**
	 * 스켈레톤의 애니메이션 상태를 골라주세요
	 */
	animation: PropTypes.oneOf([false, 'wave']),
	/**
	 * 스켈레톤의 추가설정을 할 수 있습니다.
	 */
	sx: PropTypes.shape({}),
}

MSkeleton.defaultProps = {
	variant: 'text',
	animation: undefined,
}

export default MSkeleton
