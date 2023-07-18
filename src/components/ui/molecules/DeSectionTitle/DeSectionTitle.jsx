import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import cssToken from 'styles/cssToken'

const DeSectionTitle = ({ title, rightTitle }) => (
	<S.FlexBox>
		<S.SectionTitle>{title}</S.SectionTitle>
		<S.RightTitle>{rightTitle}</S.RightTitle>
	</S.FlexBox>
)

export default DeSectionTitle

const S = {}

S.FlexBox = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	margin-bottom: 18px;
`

S.SectionTitle = styled.div`
	font-size: ${cssToken.TEXT_SIZE['text-18']};
	font-weight: bold;
`

S.RightTitle = styled.div`
	font-size: ${cssToken.TEXT_SIZE['text-14']};
	color: #666666;
`

DeSectionTitle.propTypes = {
	/**
	 * 타이틀 이름을 적어주세요
	 */
	title: PropTypes.elementType.isRequired,
	/**
	 * 오른쪽에 추가로 넣을것이 있나요?
	 */
	rightTitle: PropTypes.string,
}
