import { Favorite, FavoriteBorder } from '@mui/icons-material'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Checkbox from '@mui/material/Checkbox'
import defaultImg from 'assets/images/기본프로필/default_profile_3.png'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import useOneRequest from '../../../../hooks/common/useOneRequest'
import useProductService from '../../../../hooks/service/useProduct.service'
import useMove from '../../../../hooks/useMovePage'
import timeHelper from '../../../../utils/time-helper'

const ProductCard = ({
	id,
	name,
	place,
	isLike,
	img_url,
	time,
	like,
	chat_count,
	state = '판매중',
	price,
}) => {
	const [likeState, setLikeState] = useState(isLike)
	const { linkDetailPage } = useMove()
	const { mutateAsync } = useProductService.usePostWishAdd(id)

	const onClick = useOneRequest(mutateAsync, setLikeState)
	return (
		<S.Card>
			<S.ImgBox>
				<S.LikeBox>
					<Checkbox
						onClick={onClick}
						checked={Boolean(likeState)}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite sx={{ color: 'red' }} />}
					/>
				</S.LikeBox>
				<img
					style={{ cursor: 'pointer' }}
					src={img_url || defaultImg}
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
	 * 링크 이동을 위한 상품의 아이디를 입력합니다.
	 */
	id: PropTypes.number.isRequired,
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
	place: PropTypes.string,
	/**
	 * 상품의 설명을 입력합니다.
	 */
	content: PropTypes.string,
	/**
	 * 상품이 찜하기 상품인지 확인합니다.
	 */
	isLike: PropTypes.bool.isRequired,
	/**
	 * 상품의 이미지를 입력합니다,
	 */
	img_url: PropTypes.string,
	/**
	 * 상품이 등록된 시간 혹은 업데이트된 시간을 입력합니다.
	 */
	time: PropTypes.string.isRequired,
	/**
	 * 상품의 찜하기 갯수를 입력합니다.
	 */
	like: PropTypes.number,
	/**
	 * 상품의 채팅 갯수를 입력합니다.
	 */
	chat_count: PropTypes.number,
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
	width: 100%;
`
S.ImgBox = styled.div`
	position: relative;
	aspect-ratio: 1/1;
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: 9px;

	img {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 1s;
		&:hover {
			transform: scale(1.05);
		}
	}
`

S.CloseBox = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(00, 00, 00, 50%);
	z-index: ${({ theme }) => theme.Z_INDEX['altImage']};
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
