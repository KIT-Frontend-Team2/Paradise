import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

const TotalPrice = ({user_total_product}) => {
  const price = 10000; // 예시로 가격을 10000으로 설정하겠습니다.

  return (
    <S.Wrapper>
      <S.Left>
        <S.Title>이번달 판매 금액</S.Title>
        <S.Price>{user_total_product}</S.Price>
      </S.Left>
      <S.Right>
        <S.TotalSalePrice>판매총액 <span>{price}</span></S.TotalSalePrice>
        <S.TotalPurchasePrice>구매총액 <span>{price}</span></S.TotalPurchasePrice>
        <S.TotalPrice>합 <span>{price}</span></S.TotalPrice>
      </S.Right>
    </S.Wrapper>
  );
};

export default TotalPrice;

const S = {};

S.Wrapper = styled(Box)`
	background-color: ${({ theme }) => theme.PALETTE.primary[100]};
  padding: 40px;
  display: flex;
  justify-content: space-between;
`

S.Left = styled.div`
  color: ${({ theme }) => theme.PALETTE.white};
`
S.Right = styled.div`
  color: ${({ theme }) => theme.PALETTE.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light}; 
`
S.Title = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};  
  font-size: ${({ theme }) => theme.FONT_SIZE.xlarge};
`
S.Price = styled.div`
font-size: 48px;
`
S.TotalSalePrice = styled.div`
  margin-right: 15px;
::after{
  content: '|' ;
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};  
}
`
S.TotalPurchasePrice = styled.div`
 margin-right: 15px;
::after{
  content: '|' ;
  margin-left: 20px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};  
}
`
S.TotalPrice = styled.div`

`