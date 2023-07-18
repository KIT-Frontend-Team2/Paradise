import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../atoms/Button/Button'

const DeUserProductButton = ({ productCount }) => {
	if (productCount <= 6) return null

	productCount -= 6

	return (
		<S.ButtonBox>
			<Button label={`${productCount}개 더보기`} size={'full'} />
		</S.ButtonBox>
	)
}

export default DeUserProductButton

DeUserProductButton.propTypes = {
	/**
	 * 숫자가 5 이하일 경우 해당 버튼은 보이지가 않습니다.
	 */
	productCount: PropTypes.number.isRequired,
}

const S = {}

S.ButtonBox = styled.div`
	width: 540px;
	> button {
		border: 1px solid #36bac6;
		background-color: #36bac6;
	}
`
