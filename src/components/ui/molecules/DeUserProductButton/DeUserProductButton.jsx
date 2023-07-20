import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../atoms/Button/Button'

const DeUserProductButton = ({ productCount, userId }) => {
	if (productCount <= 6) return null
	productCount -= 6

	const onClick = () => {
		console.log(userId + '의 상품목록을 조회합니다.')
	}

	return (
		<S.ButtonBox>
			<Button
				onClick={onClick}
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
	width: 540px;
	> button {
		border: 1px solid #36bac6;
		background-color: #36bac6;
	}
`
