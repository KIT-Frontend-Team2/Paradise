import AddCircleIcon from '@mui/icons-material/AddCircle'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import styled from 'styled-components'

const FooterMobile = () => {
	const footer = [
		{
			icon: <HomeIcon />,
			label: '홈',
		},
		{
			icon: <SearchIcon />,
			label: '검색',
		},
		{
			icon: <AddCircleIcon />,
			label: '등록',
		},
		{
			icon: <ChatBubbleOutlineIcon />,
			label: '채팅',
		},
		{
			icon: <PersonIcon />,
			label: 'MY',
		},
	]

	const [selected, setSelected] = useState(0)

	const handleClick = index => {
		setSelected(index)
	}
	return (
		<S.FooterContainer>
			{footer.map((item, index) => (
				<S.CustomBox
					key={index}
					onClick={() => handleClick(index)}
					isSelected={index === selected}
				>
					{item.icon}
					<span>{item.label}</span>
				</S.CustomBox>
			))}
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

	@media (min-width: 479px) {
		display: none;
	}
`

S.CustomBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	svg {
		font-size: 1.5rem;
		color: ${({ isSelected }) => (isSelected ? '#009d91' : 'inherit')};
	}
	span {
		margin-top: 4px;
	}
`
