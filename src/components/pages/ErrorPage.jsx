import errorCaseError from 'assets/images/error-case-error.png'
import React from 'react'
import { styled } from 'styled-components'

import useMove from '../../hooks/useMovePage'
import Container from '../layout/Container'
import Button from '../ui/atoms/Button/Button'

const ErrorPage = ({ error, errorMessage, errorImg }) => {
	const { linkMainPage } = useMove()

	return (
		<S.Wrapper>
			<Container>
				<S.ErrorBox>
					<S.ErrorTitle>{error}</S.ErrorTitle>
					<S.ErrorImage>
						<img src={errorImg} alt={'에러 이미지'} loading={'lazy'} />
					</S.ErrorImage>
					<S.ErrorMessage>{errorMessage}</S.ErrorMessage>
					<Button label={'홈으로'} onClick={() => linkMainPage()} />
				</S.ErrorBox>
			</Container>
		</S.Wrapper>
	)
}

export default ErrorPage

const S = {}

S.Wrapper = styled.div`
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

S.ErrorBox = styled.div`
	width: 480px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT['regular']};
	gap: 58px;
`

S.ErrorTitle = styled.div`
	color: ${({ theme }) => theme.PALETTE.fontColor};
	font-size: 28px;
`

S.ErrorImage = styled.div`
	width: 220px;
	height: 174px;

	img {
		width: 100%;
		height: 100%;
	}
`

S.ErrorMessage = styled.div`
	color: ${({ theme }) => theme.PALETTE.gray[700]};
	font-size: ${({ theme }) => theme.FONT_SIZE['large']};
`

ErrorPage.defaultProps = {
	error: '알수없는 오류로 인해 페이지가 안내되지 않았습니다.',
	errorMessage:
		'알수없는 오류로 인해 요청하신 페이지를 찾을 수 없습니다. 다시한번 페이지 주소와 요청을 확인해주세요',
	errorImg: errorCaseError,
}
