import AddCircleIcon from '@mui/icons-material/AddCircle'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'
import styled from 'styled-components'

const FooterMobile = () => {
	return (
		<S.FooterContainer>
			<Box>
				<HomeIcon />
				<span>홈</span>
			</Box>
			<Box>
				<SearchIcon />
			</Box>
			<Box>
				<AddCircleIcon />
			</Box>
			<Box>
				<ChatBubbleOutlineIcon />
			</Box>
			<Box>
				<PersonIcon />
			</Box>
		</S.FooterContainer>
	)
}

export default FooterMobile

export const S = {}

S.FooterContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 50px;
	background-color: #ffffff;
	border-top: 1px solid #e2e2e2;

	svg {
		font-size: 1.5rem;
		/* color: #009d91; */
	}

	/* @media (min-width: 768px) {
		display: none;
	} */
`
