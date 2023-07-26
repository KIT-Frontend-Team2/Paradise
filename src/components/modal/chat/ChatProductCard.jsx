import chatListMock from '__mock__/datas/chatList.mock'
import styled, { css } from 'styled-components'

import ChatProductCardButton from './ChatProductCardButton'

const ChatProductCard = () => {
	const chat = chatListMock.data
	const getProductStatusColor = status => {
		switch (status) {
			case '판매 중':
			case '예약중':
			case '나눔 중':
				return '#009D91'
			case '판매완료':
			case '나눔 완료':
				return '#F2714F'
			default:
				return ''
		}
	}
	return (
		<S.Container>
			<S.ImageWrapper>
				<S.Image src={chat.channel_product_main_img_url} />
			</S.ImageWrapper>
			<S.ProductInfo>
				<S.Title>
					<S.ProductState color={getProductStatusColor(chat.product_status)}>
						{chat.product_status}
					</S.ProductState>
					<S.ProductName>{chat.product_name}</S.ProductName>
				</S.Title>
				<div>
					<S.ProductPrice>{chat.product_price.toLocaleString()}</S.ProductPrice>
					{'원'}
				</div>
				<div>
					<ChatProductCardButton>상품 보러가기</ChatProductCardButton>
					<ChatProductCardButton>상품 보러가기</ChatProductCardButton>
				</div>
			</S.ProductInfo>
		</S.Container>
	)
}

export default ChatProductCard

export const S = {}

S.Container = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	width: 550px;
	height: 100px;
	border: 1px solid #dddddd;
	border-radius: 6px;
	padding: 1rem;
`

S.ImageWrapper = styled.div`
	position: relative;
`
S.Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 6px;
`

S.ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 20px;
	height: 100%;
`

S.Title = styled.div``

S.ProductState = styled.span`
	${props =>
		props.color &&
		css`
			color: ${props.color};
		`}
	margin-right: 8px;
`

S.ProductName = styled.span`
	font-size: 16px;
`

S.ProductPrice = styled.span`
	font-weight: bold;
	font-size: 18px;
`
