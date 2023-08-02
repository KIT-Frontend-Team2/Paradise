import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Button from '../../atoms/Button/Button'

const MaLineBanner = ({
	height,
	title,
	importText,
	subTitle = '',
	label,
	link,
}) => (
	<S.Container height={height}>
		<S.SubTitle>{subTitle}</S.SubTitle>
		<S.TitleBox>
			<S.Title>
				{title}
				<S.ImportText>{importText}</S.ImportText>
			</S.Title>
			<Button label={label} onClick={link} size="medium" />
		</S.TitleBox>
	</S.Container>
)

export default MaLineBanner

MaLineBanner.proptype = {
	height: PropTypes.number,
	title: PropTypes.string,
	importText: PropTypes.string,
	subTitle: PropTypes.string,
	label: PropTypes.string,
	link: PropTypes.func,
}

const S = {}

S.Container = styled.div`
	display: ${({ theme }) => (theme.isDesktop ? 'block' : 'none')};
	background: #f8f8f8;
	padding: 26px 63px 29px 63px;
`

S.SubTitle = styled.div`
	color: #333;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 50px;
	letter-spacing: -0.36px;
`

S.Title = styled.div`
	color: #333;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 50px; /* 156.25% */
	letter-spacing: -0.48px;
`

S.TitleBox = styled.div`
	display: flex;
	justify-content: space-between;
`

S.ImportText = styled.span`
	color: #ff6001;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 50px;
	letter-spacing: -0.48px;
`
