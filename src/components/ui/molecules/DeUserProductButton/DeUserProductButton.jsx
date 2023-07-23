import PropTypes from 'prop-types'
import styled from 'styled-components'

import useMove from '../../../../hooks/useMovePage'
import Button from '../../atoms/Button/Button'

const DeUserProductButton = ({ width, productCount, userId }) => {
	if (productCount <= 6) return null
	productCount -= 6

	const { linkUserProduct } = useMove()

	return (
		<S.ButtonBox width={width}>
			<Button
				onClick={() => linkUserProduct(userId)}
				label={`${productCount}개 더보기`}
				size={'full'}
			/>
		</S.ButtonBox>
	)
}

export default DeUserProductButton

DeUserProductButton.propTypes = {
	/**
	 * 숫자가 5 이하일 경우 해당 버튼은 보이지가 않습니다.
	 */
	productCount: PropTypes.number.isRequired,
	/**
	 * 해당 판매자의 아이디로 조회하기 위해 아이디를 받아옵니다.
	 */
	userId: PropTypes.string.isRequired,
}

const S = {}

S.ButtonBox = styled.div`
	width: ${({ width }) => width}px;
	> button {
		border: 1px solid #36bac6;
		background-color: #36bac6;
	}
`
