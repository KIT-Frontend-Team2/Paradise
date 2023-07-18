import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import styled from 'styled-components'

const HeaderCategory = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	return (
		<>
			<S.InnerBox onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<MenuIcon />
				카테고리
				{isDropdownOpen && (
					<S.DropdownMenu>
						<span>디지털기기</span>
						<span>생활가전</span>
						<span>가전/인테리어</span>
						<span>생활/주방</span>
						<span>유아동</span>
						<span>유아도서</span>
						<span>여성의류</span>
						<span>여성잡화</span>
						<span>식물</span>
						<span>남성패션/잡화</span>
						<span>뷰티/미용</span>
						<span>스포츠/레저</span>
						<span>취미/게임/음반</span>
						<span>도서</span>
						<span>티켓/교환권</span>
						<span>가공식품</span>
						<span>반려동물용품</span>
						<span>기타중고물품</span>
					</S.DropdownMenu>
				)}
			</S.InnerBox>
		</>
	)
}

export default HeaderCategory

export const S = {}

S.InnerBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
`

S.SignBox = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	right: 10%;
	a {
		color: #000;
		text-decoration: none;
	}

	span {
		color: #999;
		margin: 0 20px;
		font-size: 20px;
	}
`
S.DropdownMenu = styled.div`
	position: absolute;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 8px;
	border-radius: 5px;
	z-index: 1;
	top: 180px;
	span {
		display: block;
		padding: 5px;
		cursor: pointer;
		font-size: 16px;
		&:hover {
			background-color: #f5f5f5;
		}
	}
`
