import ChatIcon from '@mui/icons-material/Chat'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { styled } from 'styled-components'

const SideChatButton = ({ isNew }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<S.MotionStyle isnew={isNew.toString()}>
			<motion.div
				initial={false}
				animate={isOpen}
				whileHover={{ scale: 1.1, rotate: 20 }}
				whileTap={{ scale: 0.96, rotate: -20 }}
				onTap={() => setIsOpen(prev => !prev)}
			>
				{!isNew ? (
					<ChatIcon sx={{ fontSize: '30px' }} />
				) : (
					<MarkUnreadChatAltIcon sx={{ fontSize: '30px' }} />
				)}
			</motion.div>
		</S.MotionStyle>
	)
}

export default SideChatButton

const S = {}

S.MotionStyle = styled.div`
	div {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		color: ${({ theme, isnew }) =>
			isnew === 'false' ? theme.PALETTE.gray[300] : theme.PALETTE.white};
		width: 70px;
		height: 70px;
		border-radius: 30px;
		cursor: pointer;
		background-color: ${({ theme }) => theme.PALETTE.primary[100]};
		border: 0.5px solid ${({ theme }) => theme.PALETTE.primary[100]};
	}
`
