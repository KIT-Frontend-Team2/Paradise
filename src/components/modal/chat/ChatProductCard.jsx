import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { IconButton } from '@mui/material'
import styled, { css } from 'styled-components'

import ChatProductCardButton from './ChatProductCardButton'

export const getProductStatusColor = status => {
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
const ChatProductCard = ({ chatData, collapsed, toggleCollapse }) => {
	const {
		product_id,
		product_name,
		product_main_img_url,
		product_status,
		product_price,
	} = chatData

	return (
		<S.Container collapsed={collapsed}>
			<S.ImageWrapper collapsed={collapsed}>
				<S.Image src={product_main_img_url} />
			</S.ImageWrapper>
			<S.ProductInfo>
				<S.Title collapsed={collapsed}>
					<S.ProductState color={getProductStatusColor(product_status)}>
						{product_status}
					</S.ProductState>
					<S.ProductName>{product_name}</S.ProductName>
					{collapsed && (
						<>
							<S.ProductPrice collapsed={collapsed}>
								{product_price.toLocaleString()}원
							</S.ProductPrice>
						</>
					)}
				</S.Title>
				{!collapsed && (
					<>
						<S.ProductPrice>{product_price.toLocaleString()}원</S.ProductPrice>
						<div>
							<ChatProductCardButton>상품 보러가기</ChatProductCardButton>
						</div>
					</>
				)}
			</S.ProductInfo>
			<S.ArrowButton>
				<IconButton onClick={toggleCollapse}>
					{!collapsed ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
				</IconButton>
			</S.ArrowButton>
		</S.Container>
	)
}

export default ChatProductCard

export const S = {}

S.Container = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	width: ${({ collapsed }) => (collapsed ? '550px' : '550px')};
	height: ${({ collapsed }) => (collapsed ? '20px' : '100px')};
	border: 1px solid #dddddd;
	border-radius: 6px;
	padding: 1rem;
	background-color: #fff;
	margin-top: ${({ collapsed }) => (collapsed ? '0' : '10px')};
`

S.ImageWrapper = styled.div`
	position: relative;
	display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
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

S.Title = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

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
	${({ collapsed }) =>
		collapsed &&
		css`
			margin-left: 20px;
		`}
`
S.ArrowButton = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
`
