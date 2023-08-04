import styled, { css } from 'styled-components'
import timeHelper from 'utils/time-helper'

// import { getProductStatusColor } from './ChatProductCard'

const ChatList = ({
	handleChatClick,
	id,
	productImage,
	productTitle,
	createdAt,
	lastMessage,
	data,
	isRead,
	productPrice,
}) => {
	return (
		<>
			<S.ChatListContainer key={id} onClick={() => handleChatClick(data)}>
				<S.ImageWrapper>
					<S.Image src={productImage} alt={productTitle} />
				</S.ImageWrapper>
				<S.InfoWrapper>
					<S.TitleWrapper>
						{/* <S.ProductStatus color={getProductStatusColor(data.product_status)}>
							{item.product_status}
						</S.ProductStatus> */}
						<S.ProductName>{productTitle}</S.ProductName>
						<S.LastChatAgo>{timeHelper(createdAt)}</S.LastChatAgo>
					</S.TitleWrapper>
					{/* {data.lastMessage && data.image && <S.LastChat>[이미지]</S.LastChat>} */}
					{lastMessage && <S.LastChat>{lastMessage}</S.LastChat>}
					<S.ProductPrice>{productPrice.toLocaleString()}원</S.ProductPrice>

					{!isRead && <S.NewChatIndicator />}
				</S.InfoWrapper>
			</S.ChatListContainer>
		</>
	)
}

export default ChatList

export const S = {}

S.ChatListContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	border: 1px solid lightgray;
	border-radius: 6px;
	padding: 0.5rem;
	margin: 0.5rem 1rem;
	cursor: pointer;
`

S.ImageWrapper = styled.div`
	position: relative;
`

S.Image = styled.img`
	height: 100px;
	width: 100px;
	object-fit: cover;
	border-radius: 6px;
`

S.ProductStatus = styled.span`
	${props =>
		props.color &&
		css`
			color: ${props.color};
		`}

	margin-right: 8px;
`

S.InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	flex-grow: 1;
`
S.TitleWrapper = styled.div`
	display: flex;
	align-items: center;
`

S.ProductName = styled.span`
	font-size: 1rem;
`

S.LastChat = styled.p`
	font-size: 0.85rem;
`

S.ProductPrice = styled.span`
	font-weight: bold;
	font-size: 1rem;
`

S.LastChatAgo = styled.span`
	font-size: 0.8rem;
	text-align: left;
	opacity: 0.7;
	position: absolute;
	right: 10px;
`

S.NewChatIndicator = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background-color: #f2714f;
	position: absolute;
	top: 5px;
	right: 5px;
`
