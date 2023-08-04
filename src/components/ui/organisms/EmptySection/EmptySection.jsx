import emptyLogo from 'assets/images/empty-list.png'
import React from 'react'
import styled from 'styled-components'

const EmptySection = ({ titleMessage, size }) => (
	<S.Wrapper>
		<img src={emptyLogo} alt={'상품이 없습니다.'} width={size} height={size} />
		<S.TitleMessage>{titleMessage}</S.TitleMessage>
	</S.Wrapper>
)
const S = {}

S.Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

S.TitleMessage = styled.div`
	font-size: 16px;
`

export default EmptySection
