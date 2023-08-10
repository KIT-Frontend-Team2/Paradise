import defaultImg from 'assets/images/기본프로필/default_profile_3.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProductCard = ({ id, name, img_url, time, price, handleOpen }) => {
	return (
		<S.Card>
			<S.ImgBox>
				<img
					style={{ cursor: 'pointer' }}
					src={img_url || defaultImg}
					alt={name}
				/>
				<S.CloseBox onClick={() => handleOpen(id, false)}>
					<span>리뷰 작성</span>
				</S.CloseBox>
			</S.ImgBox>
			<S.PlaceWithTimeBox>
				<span>{time.slice(0, 10)}</span>
			</S.PlaceWithTimeBox>
			<S.TitleBox>{name}</S.TitleBox>
			{price !== 0 ? (
				<S.PriceBox>{price.toLocaleString() + '원'}</S.PriceBox>
			) : (
				<></>
			)}
		</S.Card>
	)
}

export default ProductCard

ProductCard.propTypes = {
	/**
	 * 상품 카드의 가로 길이를 설정할 수 있습니다. 이미지의 세로길이도 동일합니다.
	 */
	size: PropTypes.number.isRequired,
	/**
	 * 링크 이동을 위한 상품의 아이디를 입력합니다.
	 */
	id: PropTypes.number.isRequired,
	/**
	 * 상품 게시물의 이름을 입력합니다.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * 상품의 이미지를 입력합니다,
	 */
	img_url: PropTypes.string,
	/**
	 * 상품이 등록된 시간 혹은 업데이트된 시간을 입력합니다.
	 */
	time: PropTypes.string.isRequired,
	/**
	 * 상품의 가격을 결정합니다.
	 */
	price: PropTypes.number,
}

const S = {}

S.LikeBox = styled.div`
	z-index: 3;
	top: 5px;
	right: 5px;
	position: absolute;
	transition: 0.5s;

	:hover {
		transform: scale(1.05);
	}
`

S.Card = styled.div`
	text-align: left;
`
S.ImgBox = styled.div`
	position: relative;
	aspect-ratio: 1/1;
	overflow: hidden;
	margin-bottom: 9px;

	img {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

S.CloseBox = styled.div`
	position: absolute;
	cursor: pointer;
	width: 30%;
	height: 15%;
	background: rgba(00, 00, 00, 50%);
	z-index: ${({ theme }) => theme.Z_INDEX['altImage']};
	top: 0;
	right: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	span {
		font-weight: bold;
		font-size: 12px;
		color: ${({ theme }) => theme.PALETTE.white};
	}
`

S.PlaceWithTimeBox = styled.div`
	margin-bottom: 2.5px;
	display: flex;
	gap: 15px;

	span {
		color: ${({ theme }) => theme.PALETTE.gray[600]};
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
		white-space: nowrap;
		font-style: normal;
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
		line-height: normal;
	}
`

S.TitleBox = styled.div`
	white-space: nowrap;
	overflow: hidden;
	color: ${({ theme }) => theme.PALETTE.black};
	text-overflow: ellipsis;
	font-size: ${({ theme }) => theme.FONT_SIZE.normal};
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-bottom: 5px;
`

S.PriceBox = styled.div`
	height: 25px;
	color: ${({ theme }) => theme.PALETTE.primary[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: 500;
	line-height: normal;
	margin-bottom: 5px;
	text-align: left;
`

S.FlexBox = styled.div`
	color: ${({ theme }) => theme.PALETTE.gray[700]};
	height: 20px;
	line-height: 20px;
	display: flex;
	gap: 10px;
`
S.IconWithText = styled.div`
	display: flex;
	gap: 3px;

	span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	}
`
ProductCard.defaultProps = {
	price: 0,
}
