import React, { useState } from 'react'
import { styled } from 'styled-components'

const Myselect = ({ handleFilter }) => {
	const [month, setMonth] = useState('3개월')

	const handleChange = e => {
		setMonth(e.target.value)
		handleFilter(e.target.value)
	}

	return (
		<S.Select value={month} onChange={handleChange}>
			<option value="threeMonths">3개월</option>
			<option value="SixMonths">6개월</option>
			<option value="Ninemonths">9개월</option>
			<option value="year">12개월</option>
		</S.Select>
	)
}

export default Myselect

const S = {}

S.Select = styled.select`
	width: 150px;
	height: 40px;
	padding: 8px;
	font-size: 16px;
	border-radius: 8px;
	cursor: pointer;
	appearance: none;

	&:hover {
		border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.PALETTE.primary[100]};
	}
`
