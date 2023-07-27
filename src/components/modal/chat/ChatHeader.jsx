import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'

const ChatHeader = ({ layout, setLayout }) => {
	return (
		<AppBar
			sx={{
				position: 'relative',
				width: '100%',
				height: '50px',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: '#009d91',
			}}
		>
			<Toolbar>
				{!layout && (
					<IconButton
						edge="start"
						aria-label="back"
						onClick={() => setLayout(true)}
					>
						<ArrowBackIosIcon sx={{ color: '#fff', fontSize: '12px' }} />
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
					<IconButton edge="end" aria-label="close">
						<CloseIcon sx={{ color: '#fff' }} />
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	)
}
export default ChatHeader
