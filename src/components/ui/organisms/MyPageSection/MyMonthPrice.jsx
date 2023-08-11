import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { formatNumberToMoney } from 'utils/formatter'

const MonthPrice = ({ amount}) => {

	const {
		thisMonthPurchaseAmount,
		thisMonthSaleAmount,
	} = amount

	const MonthPurchaseAmountNumber = parseFloat(thisMonthPurchaseAmount);
	const MonthSaleAmountNumber = parseFloat(thisMonthSaleAmount);
	const result = MonthSaleAmountNumber-MonthPurchaseAmountNumber

	return (
		<S.Wrapper>
			<S.Left>
				<S.Title>이번달 판매 금액</S.Title>
				<S.Price>{formatNumberToMoney(parseInt(thisMonthSaleAmount))}</S.Price>
			</S.Left>
			<S.Right>
				<S.TotalSalePrice>
					판매총액 <span>{formatNumberToMoney(parseInt(thisMonthSaleAmount))}</span>
				</S.TotalSalePrice>
				<S.TotalPurchasePrice>
					구매총액 <span>{formatNumberToMoney(parseInt(thisMonthPurchaseAmount))}</span>
				</S.TotalPurchasePrice>
				<S.TotalPrice>
					합 <span>{formatNumberToMoney(result)}</span>
				</S.TotalPrice>
			</S.Right>
		</S.Wrapper>
	)
}

export default MonthPrice

const S = {}

S.Wrapper = styled(Box)`
	background-color: ${({ theme }) => theme.PALETTE.primary[100]};
	padding: 40px;
	display: flex;
	flex: 1;
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};
	justify-content: space-between;
`

S.Left = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'flex')};
	align-items: center;
`
S.Right = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	display: flex;
	flex-direction: ${({ theme }) =>
		theme.isDesktop ? 'column' : 'row'};
	justify-content: ${({ theme }) =>
		theme.isDesktop ? 'space-between' : 'flex-start'};
	align-items: center;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`
S.Title = styled.div`
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	margin-right: 20px;
`
S.Price = styled.div`
	font-size: 48px;
`
S.TotalSalePrice = styled.div`
	margin-right: 15px;
	::after {
		content: '|';
		margin-left: 20px;
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
		display: ${({ theme }) =>
		theme.isDesktop ? 'none' : 'block'};
	}
`
S.TotalPurchasePrice = styled.div`
	margin-right: 15px;
	::after {
		content: '|';
		margin-left: 20px;
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
		display: ${({ theme }) =>
		theme.isDesktop ? 'none' : 'block'};
	}
`
S.TotalPrice = styled.div``
