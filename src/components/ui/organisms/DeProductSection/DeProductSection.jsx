import ChatIcon from '@mui/icons-material/Chat'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import cssToken from '../../../../styles/cssToken'
import timeHelper from '../../../../utils/time-helper'
import Button from '../../atoms/Button/Button'
import WishButton from '../../atoms/Button/WishButton'
import LineBar from '../../atoms/Linebar/LineBar'

const DeProductSection = ({
	title,
	time,
	like,
	chatCount,
	price,
	wish,
	userState,
	productInfo,
}) => (
	<>
		<S.ProductTitle>{title}</S.ProductTitle>
		<S.ProductTitleBox>
			<S.ProductCreateAt>{timeHelper(time)}</S.ProductCreateAt>
			<S.ProductCountInfo>
				{'관심 ' + like + ' 채팅 ' + chatCount}
			</S.ProductCountInfo>
		</S.ProductTitleBox>
		<S.ProductFlexBox>
			<S.ProductPrice>
				<S.ProductPriceNumber>{price.toLocaleString()}</S.ProductPriceNumber>
				{'원'}
			</S.ProductPrice>
			<S.ProductButtons>
				<WishButton variant={wish} />
				<Button
					size={'medium'}
					variant={'primary'}
					starticon={<ChatIcon fontSize="small" />}
					label={userState ? '채팅하기' : '채팅목록'}
				/>
			</S.ProductButtons>
		</S.ProductFlexBox>
		<LineBar />
		<S.ProductInfo>{productInfo}</S.ProductInfo>
	</>
)

export default DeProductSection

const S = {}

S.ProductTitle = styled.div`
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: ${cssToken.TEXT_SIZE['text-24']};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	margin-bottom: 4px;
`

S.ProductTitleBox = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	color: ${({ theme }) => theme.PALETTE.gray[700]};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	margin-bottom: 10px;
`

S.ProductCreateAt = styled.span``

S.ProductCountInfo = styled.span``

S.ProductFlexBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
`

S.ProductPrice = styled.div`
	font-size: 28px;
	font-weight: bold;
`

S.ProductPriceNumber = styled.span`
	font-size: 35px;
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
	like: PropTypes.number.isRequired,
	/**
	 * 해당 상품 채팅 채널의 열린 채팅방 수를 알려주세요
	 */
	chatCount: PropTypes.number.isRequired,
	/**
	 * 해당 상품의 가격을 알려주세요
	 */
	price: PropTypes.number.isRequired,
	/**
	 * 해당 상품의 본인의 상태를 알려주세요
	 */
	wish: PropTypes.oneOf(['wish', 'wish-on']),
	/**
	 * 해당 상품의 본의 역할을 알려주세요. 판매자 혹은 구매자
	 */
	userState: PropTypes.bool.isRequired,
	/**
	 * 해당 상품의 소개글에 대해서 알려주세요.
	 */
	productInfo: PropTypes.string.isRequired,
}
