import SettingsIcon from '@mui/icons-material/Settings'
import React from 'react'
import { styled } from 'styled-components'

import S from './style'

const UpdateButton = ({ ...args }) => {
	return (
		<S.UpdateButton {...args}>
			<SettingsIcon />
		</S.UpdateButton>
	)
}

export default UpdateButton

S.UpdateButton = styled.button`
	background-color: ${({ theme }) => theme.PALETTE.background.white};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[700]};
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	font-weight: bold;
	border-radius: 6px;
	cursor: pointer;
	svg {
		color: ${({ theme }) => theme.PALETTE.gray[700]};
	}
`
