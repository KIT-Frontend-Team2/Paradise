import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../atoms/Button/Button'

const DeUserProductButton = ({ productCount, backgroundColor }) => {
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
	 * 이미지 주소를 입력해주세요 없을 시 대체이미지가 등록이 됩니다.
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
