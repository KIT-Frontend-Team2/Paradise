import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { formatNumberToMoney } from 'utils/formatter'

const TotalPrice = ({ amount }) => {
	const { totalPurchaseAmount, totalSaleAmount } = amount

	const TotalPurchaseAmountNumber = parseFloat(totalPurchaseAmount)
	const TotalSaleAmountNumber = parseFloat(totalSaleAmount)
	const result = TotalSaleAmountNumber - TotalPurchaseAmountNumber

	return (
		<S.Wrapper>
			<S.Left>
				<S.Title>총 판매 금액 </S.Title>
				<S.Price>{formatNumberToMoney(parseInt(totalSaleAmount)) + '원'}</S.Price>
			</S.Left>
			<S.Right>
				<S.TotalSalePrice>
					판매총액 <span>{formatNumberToMoney(parseInt(totalSaleAmount))}</span>
				</S.TotalSalePrice>
				<S.TotalPurchasePrice>
					구매총액{' '}
					<span>{formatNumberToMoney(parseInt(totalPurchaseAmount))}</span>
				</S.TotalPurchasePrice>
				<S.TotalPrice>
					합 <span>{formatNumberToMoney(parseInt(result))}</span>
				</S.TotalPrice>
			</S.Right>
		</S.Wrapper>
	)
}

export default TotalPrice

const S = {}

S.Wrapper = styled(Box)`
	background-color: ${({ theme }) => theme.PALETTE.gray[300]};
	padding: 26px;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
`

S.Left = styled.div`
	color: ${({ theme }) => theme.PALETTE.fontColor};
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'flex')};
	flex-direction: ${({ theme }) => (theme.isDesktop ? 'row' : 'column')};;
	align-items: center;
	margin-bottom: 20px ;
`
S.Right = styled.div`
	color: ${({ theme }) => theme.PALETTE.fontColor};
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
