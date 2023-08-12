import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { formatNumberToMoney } from 'utils/formatter'

const MonthPrice = ({ amount }) => {
	const { thisMonthPurchaseAmount, thisMonthSaleAmount } = amount

	const MonthPurchaseAmountNumber = parseFloat(thisMonthPurchaseAmount)
	const MonthSaleAmountNumber = parseFloat(thisMonthSaleAmount)
	const result = MonthSaleAmountNumber - MonthPurchaseAmountNumber

	return (
		<S.Wrapper>
			<S.Left>
				<S.Title>이번달 판매 금액</S.Title>
				<S.Price>{formatNumberToMoney(parseInt(thisMonthSaleAmount)) + '원'}</S.Price>
			</S.Left>
			<S.Right>
				<S.TotalSalePrice>
					판매총액{' '}
					<span>{formatNumberToMoney(parseInt(thisMonthSaleAmount))} </span>
				</S.TotalSalePrice>
				<S.TotalPurchasePrice>
					구매총액{' '}
					<span>{formatNumberToMoney(parseInt(thisMonthPurchaseAmount))}</span>
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
	padding: 26px;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
`

S.Left = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'flex')};
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};;
	align-items: center;
	margin-bottom: 20px ;
`
S.Right = styled.div`
	color: ${({ theme }) => theme.PALETTE.white};
	display: flex;
	justify-content: ${({ theme }) =>
	theme.isDesktop ? 'space-between' : 'flex-start'};
	align-items: center;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
`
S.Title = styled.div`
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
	font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
	margin-right: 20px;
`
S.Price = styled.div`
	font-size: 36px;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`
S.TotalSalePrice = styled.div`
	margin-right: 15px;

`
S.TotalPurchasePrice = styled.div`
	margin-right: 15px;

`
S.TotalPrice = styled.div``
