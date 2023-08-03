import PropTypes from 'prop-types'
import styled from 'styled-components'
import cssToken from 'styles/cssToken'

import altProfile from '../../../../assets/images/기본프로필/default_profile_2.png'

/**
 * 상품을 눌렀을 때 해당 유저의 상품을 볼 수 있게 페이지 이동이 되야함
 */
const DeUserCard = ({
	imgProfile,
	size,
	userName,
	productCount,
	userTemplate,
}) => {
	return (
		<S.UserFlexBox>
			<S.UserImg size={size}>
				<img src={imgProfile || altProfile} alt={'판매자 이미지'} />
			</S.UserImg>
			<S.UserInfoBox>
				<S.UserName>{userName}</S.UserName>
				<S.UserInfo>
					<S.ProductCount>{`상품 ` + productCount}</S.ProductCount>
					<S.UserTemplate>{`온도 ` + userTemplate}</S.UserTemplate>
				</S.UserInfo>
			</S.UserInfoBox>
		</S.UserFlexBox>
	)
}

export default DeUserCard

const S = {}

S.UserFlexBox = styled.div`
	display: flex;
	gap: 10px;
`
S.UserImg = styled.div`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	overflow: hidden;
	border-radius: 50px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
S.UserInfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

S.UserName = styled.div`
	font-size: ${cssToken.TEXT_SIZE['text-16']};
`

S.UserInfo = styled.div`
	display: flex;
	gap: 15px;
	color: #999999;
	font-size: ${cssToken.TEXT_SIZE['text-12']};

	span:last-child {
		position: relative;
	}

	span:last-child:before {
		position: absolute;
		content: '';
		top: 4px;
		left: -8px;
		width: 1px;
		height: 10px;
		background-color: ${({ theme }) => theme.PALETTE.gray[400]};
	}
`

S.ProductCount = styled.span``
S.UserTemplate = styled.span``

DeUserCard.propTypes = {
	/**
	 * 이미지 주소를 입력해주세요 없을 시 대체이미지가 등록이 됩니다.
	 */
	imgProfile: PropTypes.string,
	/**
	 * 이미지의 사이즈를 입력해주세요
	 */
	size: PropTypes.number,
	/**
	 * 판매자의 이름을 입력해주세요
	 */
	userName: PropTypes.string.isRequired,
	/**
	 * 판매자가 판매하는 아이템의 갯수를 입력해주세요
	 */
	productCount: PropTypes.number,
	/**
	 * 판매자의 온도를 입력해주세요
	 */
	userTemplate: PropTypes.number.isRequired,
}

DeUserCard.defaultProps = {
	size: 40,
}
