import ChatIcon from '@mui/icons-material/Chat'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import useOneRequest from '../../../../hooks/common/useOneRequest'
import useProductService from '../../../../hooks/service/useProduct.service'
import useMove from '../../../../hooks/useMovePage'
import Button from '../../atoms/Button/Button'
import UpdateButton from '../../atoms/Button/UpdateButton'
import WishButton from '../../atoms/Button/WishButton'
import LineBar from '../../atoms/Linebar/LineBar'
import MTooltip from '../../atoms/Tooltip/MTooltip'
import DeProductTitle from '../../molecules/DeProductTitle/DeProductTitle'

const DeProductSection = ({
	id,
	isLike,
	title,
	time,
	like,
	chatCount,
	price,
	state,
	isBuyer,
	productInfo,
}) => {
	const [isLikeState, setIsLikeState] = useState(isLike | false)
	const { linkModifyProduct } = useMove()
	const { mutateAsync } = useProductService.usePostWishAdd(id)

	const onClick = useOneRequest(mutateAsync, setIsLikeState)

	return (
		<>
			<DeProductTitle
				title={title}
				time={time}
				like={like}
				chatCount={chatCount}
			/>
			<S.ProductFlexBox>
				<S.ProductPrice>
					<S.ProductPriceNumber>
						<div>{price.toLocaleString()}</div>
						<div style={{ fontSize: '28px' }}>{' 원'}</div>
					</S.ProductPriceNumber>
				</S.ProductPrice>
				{state === '판매중' ? (
					<S.ProductButtons>
						{!isBuyer ? (
							<WishButton
								onClick={onClick}
								variant={!isLikeState ? 'wish' : 'wish-on'}
							/>
						) : (
							<MTooltip title={'상품의 수정 페이지로 이동'} placement={'top'}>
								<UpdateButton onClick={() => linkModifyProduct(id)} />
							</MTooltip>
						)}
						<MTooltip
							title={!isBuyer ? '판매자와 채팅하기' : '채팅목록 확인하기'}
							placement={'top'}
						>
							<Button
								size={'medium'}
								variant={'primary'}
								starticon={<ChatIcon fontSize="small" />}
								label={!isBuyer ? '채팅하기' : '채팅목록'}
							/>
						</MTooltip>
					</S.ProductButtons>
				) : (
					<Button disabled label="거래완료" />
				)}
			</S.ProductFlexBox>
			<LineBar />
			<S.ProductInfo>{productInfo}</S.ProductInfo>
		</>
	)
}

export default DeProductSection

const S = {}

S.ProductFlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	align-items: flex-end;
	flex-wrap: wrap;
`

S.ProductPrice = styled.div`
	font-size: 28px;
	font-weight: bold;
`

S.ProductPriceNumber = styled.div`
	line-height: 35px;
	font-size: 35px;
	display: flex;

	div {
		max-width: 230px;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`

S.ProductButtons = styled.div`
	display: flex;
	gap: 5px;
`

S.ProductInfo = styled.div`
	white-space: pre-line; // 개행문자 줄바꿈 변경
	font-size: ${({ theme }) => theme.FONT_SIZE.normal};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`

DeProductSection.propTypes = {
	/**
	 * 상품의 아이디를 알려주세요
	 */
	id: PropTypes.number.isRequired,
	/**
	 * 상품의 제목을 입력해주세요.
	 */
	title: PropTypes.string.isRequired,
	/**
	 * 상품을 올린 시간 또는 업데이트 된 시간을 알려주세요
	 */
	time: PropTypes.string.isRequired,
	/**
	 * 상품을 좋아요 한 사람의 수를 알려주세요
	 */
	like: PropTypes.number,
	/**
	 * 해당 상품을 좋아요 했는지 안했는지 알려주세요
	 */
	isLike: PropTypes.bool.isRequired,
	/**
	 * 해당 상품의 현재 판매 상태를 나타내줍니다.
	 */
	state: PropTypes.string.isRequired,
	/**
	 * 해당 상품 채팅 채널의 열린 채팅방 수를 알려주세요
	 */
	chatCount: PropTypes.number,
	/**
	 * 해당 상품의 가격을 알려주세요
	 */
	price: PropTypes.number.isRequired,
	/**
	 * 해당 상품의 본의 역할을 알려주세요. 판매자 혹은 구매자
	 */
	isBuyer: PropTypes.bool.isRequired,
	/**
	 * 해당 상품의 소개글에 대해서 알려주세요.
	 */
	productInfo: PropTypes.string.isRequired,
}
