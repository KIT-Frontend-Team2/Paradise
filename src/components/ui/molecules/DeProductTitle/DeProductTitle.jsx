import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import cssToken from 'styles/cssToken'

import timeHelper from '../../../../utils/time-helper'

const DeProductTitle = ({ title, time, like, chatCount }) => (
	<>
		<S.ProductTitle>{title}</S.ProductTitle>
		<S.ProductTitleBox>
			<S.ProductCreateAt>{timeHelper(time)}</S.ProductCreateAt>
			<S.ProductCountInfo>
				{'관심 ' + like + ' 채팅 ' + chatCount}
			</S.ProductCountInfo>
		</S.ProductTitleBox>
	</>
)

export default DeProductTitle

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

DeProductTitle.propTypes = {
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
	chatCount: PropTypes.number,
}
