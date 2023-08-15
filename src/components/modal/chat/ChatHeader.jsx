import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { showChatState } from 'atom/chat/atom'
import { useSetRecoilState } from 'recoil'

const ChatHeader = ({ layout, setLayout, setSelectedChat }) => {
	const setShowChat = useSetRecoilState(showChatState)
	const handleClosed = () => {
		setLayout(true)
		setShowChat(false)
		setSelectedChat(null)
	}
	const handleBack = () => {
		setLayout(true)
		setSelectedChat(null)
	}
	return (
		<AppBar
			sx={{
				position: 'relative',
				width: '100%',
				height: '50px',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: '#009d91',
				boxShadow: 'none',
			}}
		>
			<Toolbar>
				{!layout && (
					<IconButton edge="start" aria-label="back" onClick={handleBack}>
						<ArrowBackIosIcon sx={{ color: '#fff', fontSize: '16px' }} />
					</IconButton>
				)}
				<Typography
					sx={{
						fontSize: '1.3rem',
						fontWeight: 'bold',
						alignItems: 'center',
						display: 'flex',
					}}
				>
					Para Chat
				</Typography>
				<Box
					sx={{
						flexGrow: 1,
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					<IconButton edge="end" aria-label="close" onClick={handleClosed}>
						<CloseIcon sx={{ color: '#fff' }} />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	)
}
export default ChatHeader
