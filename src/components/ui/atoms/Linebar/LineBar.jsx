import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const LineBar = ({ width }) => <S.LineBar width={width} />

export default LineBar

const S = {}

S.LineBar = styled.div`
	width: ${({ width }) => width}%;
	border-bottom: 0.5px solid #dddddd;
	margin: 20px auto;
`

LineBar.propTypes = {
	/**
	 * 라인을 어느정도 채울지 알려주세요
	 */
	width: PropTypes.number,
}

LineBar.defaultProps = {
	width: 100,
}
