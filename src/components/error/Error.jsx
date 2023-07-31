import errorCaseError from 'assets/images/error-case-error.png'
import React from 'react'
import { styled } from 'styled-components'

import Button from '../ui/atoms/Button/Button'
import {HTTP_ERROR_MESSAGE} from "../../consts/api";
import PropTypes from "prop-types";

const ErrorPage = ({ statusCode, resetError }) => {
	return (
		<S.Wrapper>
			<S.ErrorBox>
				<S.ErrorTitle>{HTTP_ERROR_MESSAGE[statusCode].HEADING}</S.ErrorTitle>
				<S.ErrorImage>
					<img src={errorCaseError} alt={'에러 이미지'} loading={'lazy'} />
				</S.ErrorImage>
				<S.ErrorMessage>{HTTP_ERROR_MESSAGE[statusCode].BODY}</S.ErrorMessage>
				<Button label={HTTP_ERROR_MESSAGE[statusCode].BUTTON} onClick={resetError} />
			</S.ErrorBox>
		</S.Wrapper>
	)
}

export default ErrorPage

const S = {}

S.Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

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

ErrorPage.proptype = {
	statusCode: PropTypes.number,
	linkAction: PropTypes.func.isRequired,
}

ErrorPage.defaultProps = {
	statusCode : 404,
}
