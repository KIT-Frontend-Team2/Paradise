import { Favorite, FavoriteBorder } from '@mui/icons-material'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Checkbox from '@mui/material/Checkbox'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import useProductService from '../../../../hooks/service/useProduct.service'
import useMove from '../../../../hooks/useMovePage'
import timeHelper from '../../../../utils/time-helper'

const ProductCard = ({
	size,
	id,
	name,
	place,
	content,
	isLike,
	img_url,
	time,
	like,
	chat_count,
	state = '판매중',
	price,
}) => {
	const [likeState, setLikeState] = useState(isLike | false)
	const { linkDetailPage } = useMove()

	const { mutate } = useProductService.usePostWishAdd(id)
	const onClickWithLike = () => {
		mutate([likeState, setLikeState])
	}

	return (
		<S.Card size={size}>
			<S.ImgBox>
				<S.LikeBox>
					<Checkbox
						onClick={onClickWithLike}
						checked={Boolean(likeState)}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</S.LikeBox>
				<img
					style={{ cursor: 'pointer' }}
					src={img_url}
					alt={name}
					onClick={() => linkDetailPage(id)}
				/>
				{state === '판매완료' && (
					<S.CloseBox>
						<span>판매완료</span>
					</S.CloseBox>
				)}
			</S.ImgBox>
			<S.PlaceWithTimeBox>
				<span>{place}</span>
				<span>{timeHelper(time)}</span>
			</S.PlaceWithTimeBox>
			<S.TitleBox>{name}</S.TitleBox>
			{price !== 0 ? (
				<S.PriceBox>{price.toLocaleString() + '원'}</S.PriceBox>
			) : (
				<></>
			)}
			<S.FlexBox>
				{like > 0 && (
					<S.IconWithText>
						<FavoriteBorderIcon />
						<span>{like}</span>
					</S.IconWithText>
				)}
				{chat_count > 0 && (
					<S.IconWithText>
						<ChatBubbleOutlineOutlinedIcon />
						<span>{chat_count}</span>
					</S.IconWithText>
				)}
			</S.FlexBox>
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
	id: PropTypes.string.isRequired,
	/**
	 * 해당 상품의 현재 판매 상태를 나타내줍니다.
	 */
	state: PropTypes.string,
	/**
	 * 상품 게시물의 이름을 입력합니다.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * 상품을 올린 사용자의 장소를 입력합니다.
	 */
	place: PropTypes.string.isRequired,
	/**
	 * 상품의 설명을 입력합니다.
	 */
	content: PropTypes.string.isRequired,
	/**
	 * 상품이 찜하기 상품인지 확인합니다.
	 */
	isLike: PropTypes.bool.isRequired,
	/**
	 * 상품의 이미지를 입력합니다,
	 */
	img_url: PropTypes.string.isRequired,
	/**
	 * 상품이 등록된 시간 혹은 업데이트된 시간을 입력합니다.
	 */
	time: PropTypes.string.isRequired,
	/**
	 * 상품의 찜하기 갯수를 입력합니다.
	 */
	like: PropTypes.number.isRequired,
	/**
	 * 상품의 채팅 갯수를 입력합니다.
	 */
	chat_count: PropTypes.number.isRequired,
	/**
	 * 상품의 가격을 결정합니다.
	 */
	price: PropTypes.number,
}

const S = {}

S.LikeBox = styled.div`
	top: 5px;
	right: 5px;
	position: absolute;
	transition: 0.5s;

	:hover {
		transform: scale(1.05);
		transition: transform 0.5s;
	}
`

S.Card = styled.div`
	width: ${({ size }) => size + 'px'};
`
S.ImgBox = styled.div`
	position: relative;
	aspect-ratio: 1/1;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 9px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

S.CloseBox = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(00, 00, 00, 50%);
	z-index: 100;
	top: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	span {
		font-weight: bold;
		font-size: 24px;
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
