import NorthIcon from '@mui/icons-material/North'
import catImg from 'assets/images/cat-sidebar.png'
import React from 'react'
import styled from 'styled-components'

import useMove from '../../../../hooks/useMovePage'
import SiDeleteButton from '../../molecules/SiDeleteButton/SiDeleteButton'

const SideBarSection = ({ products }) => {
	const { linkRegister } = useMove()
	const MoveTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<S.Container>
			<S.SideBarBox>
				<S.SideBarTitle>최근 본 상품</S.SideBarTitle>
				<S.SideBarCount>
					{products.length === 5 ? '5+' : products.length}
				</S.SideBarCount>
				{products.length !== 0 ? (
					products.map(product => (
						<SiDeleteButton key={product.id} product={product} />
					))
				) : (
					<S.EmptyBox>
						최근 본 상품이 없습니다.
						<img src={catImg} width={100} alt={'데이터가 없습니다.'} />
					</S.EmptyBox>
				)}
			</S.SideBarBox>
			<S.TopButton onClick={MoveTop}>
				<span>TOP</span> <NorthIcon sx={{ fontSize: '13px' }} />
			</S.TopButton>
			<S.SalesButton onClick={linkRegister}>
				<S.SalesTitle>내 물건</S.SalesTitle>
				<S.SalesLink>판매하러 가기</S.SalesLink>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="47"
					height="41"
					viewBox="0 0 47 41"
					fill="none"
				>
					<path
						d="M8 18V38C8 38.9428 8 39.4142 8.29289 39.7071C8.58579 40 9.05719 40 10 40H38C38.9428 40 39.4142 40 39.7071 39.7071C40 39.4142 40 38.9428 40 38V18"
						stroke="white"
						strokeOpacity="0.5"
					/>
					<path
						d="M30 39V27C30 25.8954 29.1046 25 28 25H20C18.8954 25 18 25.8954 18 27V39"
						stroke="white"
						strokeLinejoin="round"
					/>
					<path
						d="M6.37351 4.3997C6.88175 3.23541 7.13588 2.65327 7.63487 2.32664C8.13386 2 8.76905 2 10.0394 2H36.9606C38.231 2 38.8661 2 39.3651 2.32664C39.8641 2.65327 40.1182 3.23541 40.6265 4.3997L45.1665 14.7998C45.9939 16.6953 46.4077 17.6431 45.9635 18.3215C45.5194 19 44.4853 19 42.417 19H38.3953C37.7689 19 37.4557 19 37.2082 18.8404C36.9607 18.6807 36.8316 18.3954 36.5733 17.8248L32.9698 9.8648C32.6743 9.21213 32.5266 8.8858 32.4409 8.91455C32.3552 8.9433 32.4343 9.29268 32.5925 9.99143L34.0789 16.5585C34.3339 17.6851 34.4615 18.2484 34.1612 18.6242C33.861 19 33.2834 19 32.1283 19H26.5233C25.6734 19 25.2485 19 24.9639 18.7458C24.6793 18.4916 24.6315 18.0694 24.5359 17.2249L23.6987 9.82739C23.6258 9.1829 23.5893 8.86066 23.5 8.86066C23.4107 8.86066 23.3742 9.1829 23.3013 9.82739L22.4641 17.2249C22.3685 18.0694 22.3207 18.4916 22.0361 18.7458C21.7515 19 21.3266 19 20.4767 19H14.8717C13.7166 19 13.139 19 12.8388 18.6242C12.5385 18.2484 12.6661 17.6851 12.9211 16.5585L14.4075 9.99143C14.5657 9.29268 14.6448 8.9433 14.5591 8.91455C14.4734 8.8858 14.3257 9.21213 14.0302 9.8648L10.4267 17.8248C10.1684 18.3954 10.0393 18.6807 9.79177 18.8404C9.54426 19 9.23109 19 8.60475 19H4.58298C2.51472 19 1.48059 19 1.03647 18.3215C0.592346 17.6431 1.00608 16.6953 1.83353 14.7998L6.37351 4.3997Z"
						stroke="white"
					/>
				</svg>
			</S.SalesButton>
		</S.Container>
	)
}

export default SideBarSection

const S = {}

S.Container = styled.div`
	box-sizing: border-box;
	width: 100px;
	height: auto;
`

S.SideBarBox = styled.div`
	box-sizing: border-box;
	border: 1px solid #ddd;
	background: #fff;
	padding: 10px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	align-items: center;
`
S.EmptyBox = styled.div`
	width: 80px;
	display: flex;
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
`

S.SideBarTitle = styled.div`
	width: 80px;
	color: ${({ theme }) => theme.PALETTE.black};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	text-align: center;
`

S.SideBarCount = styled(S.SideBarTitle)`
	color: ${({ theme }) => theme.PALETTE.secondary};
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`

S.TopButton = styled(S.SideBarBox)`
	display: flex;
	flex-direction: row;
	margin: 10px 0 10px 0;
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
	line-height: 13px;
	cursor: pointer;
`

S.SalesButton = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.primary[200]};
	text-align: center;
	padding: 5px;
	box-sizing: border-box;
	cursor: pointer;
`

S.SalesTitle = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`

S.SalesLink = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-bottom: 5px;
`
