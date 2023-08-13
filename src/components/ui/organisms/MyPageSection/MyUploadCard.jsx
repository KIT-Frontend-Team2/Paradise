import { Favorite, FavoriteBorder } from '@mui/icons-material'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Checkbox from '@mui/material/Checkbox'
import useOneRequest from 'hooks/common/useOneRequest'
import useMove from 'hooks/useMovePage'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { formatNumberToMoney } from 'utils/formatter'
import timeHelper from 'utils/time-helper'

import useProductService from '../../../../hooks/service/useProduct.service'
import SellMenuBar from './SellMenuBar'

const MyUploadCard = ({
	MyContentValue,
	key,
	price,
	isLike,
	chat_count,
	img_url,
	like,
	name,
	id,
	place,
	time,
	state,
	filter,
	categorys,
}) => {
	const { linkDetailPage } = useMove()
	const [likeState, setLikeState] = useState(Boolean(like))
	const { mutateAsync } = useProductService.usePostWishAdd(id)
	const onClick = useOneRequest(mutateAsync, setLikeState)

	useEffect(() => {
		setLikeState(Boolean(like))
	}, [isLike])

	return (
		<S.Card>
			{MyContentValue !== 'mySell' ? (
				<S.ImageBox>
					{MyContentValue === 'wish' ? (
						<S.LikeBox>
							<Checkbox
								onClick={onClick}
								checked={likeState} //
								icon={<FavoriteBorder />}
								checkedIcon={<Favorite sx={{ color: 'red' }} />}
							/>
						</S.LikeBox>
					) : (
						''
					)}
					<img
						src={img_url}
						style={{ cursor: 'pointer' }}
						alt={name}
						onClick={() => {
							linkDetailPage(id)
						}}
					/>
					{MyContentValue === 'mySell' ? (
						<S.Toggle>
							<SellMenuBar prod_idx={id} filter={filter} />
						</S.Toggle>
					) : (
						''
					)}
					{MyContentValue === 'mySell' && state === '판매완료' && (
						<S.CloseBox>
							<span>판매완료</span>
						</S.CloseBox>
					)}
				</S.ImageBox>
			) : (
				<S.ImageBox>
					{MyContentValue === 'wish' ? (
						<S.LikeBox>
							<Checkbox
								onClick={onClick}
								checked={likeState} //
								icon={<FavoriteBorder />}
								checkedIcon={<Favorite sx={{ color: 'red' }} />}
							/>
						</S.LikeBox>
					) : (
						''
					)}
					<img src={img_url} style={{ cursor: 'pointer' }} alt={name} />
					{MyContentValue === 'mySell' ? (
						<S.Toggle>
							<SellMenuBar prod_idx={id} filter={filter} />
						</S.Toggle>
					) : (
						''
					)}
					{MyContentValue === 'mySell' && state === '판매완료' && (
						<S.CloseBox>
							<span>판매완료</span>
						</S.CloseBox>
					)}
				</S.ImageBox>
			)}
			<S.PlaceWithTimeBox>
				{MyContentValue === 'recent' || MyContentValue === 'cash' ? (
					<span>서울시 강남구 역삼동</span>
				) : (
					<span>{place}</span>
				)}
				<span>{timeHelper(time)}</span>
			</S.PlaceWithTimeBox>
			<S.TitleBox>{name}</S.TitleBox>
			{price !== 0 ? (
				<S.PriceBox>{formatNumberToMoney(price) + '원'}</S.PriceBox>
			) : (
				<S.PriceBox>{formatNumberToMoney(0) + '원'}</S.PriceBox>
			)}
			<S.FlexBox>
				{MyContentValue !== 'wish' ? (
					<>
						<S.IconWithText>
							<FavoriteBorderIcon />
							<span>3</span>
						</S.IconWithText>
					</>
				) : (
					<>
						{like > 0 && (
							<S.IconWithText>
								<FavoriteBorderIcon />
								<span>{like}</span>
							</S.IconWithText>
						)}
					</>
				)}
				<S.IconWithText>
					<ChatBubbleOutlineOutlinedIcon />
					<span>3</span>
				</S.IconWithText>
			</S.FlexBox>
		</S.Card>
	)
}

export default MyUploadCard

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
	width: 200px;
	position: relative;
`
S.ImageBox = styled.div`
	width: 200px;
	height: 200px;
	position: relative;
	border-radius: 15px;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
S.Toggle = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`
S.PlaceWithTimeBox = styled.div`
	margin-bottom: 2.5px;
	display: flex;
	gap: 15px;
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

S.PriceBox = styled.div`
	height: 25px;
	color: ${({ theme }) => theme.PALETTE.primary[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	font-weight: 500;
	line-height: normal;
	margin-bottom: 5px;
	text-align: left;
`
