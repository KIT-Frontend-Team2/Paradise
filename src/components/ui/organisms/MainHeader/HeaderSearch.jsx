import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import useMove from 'hooks/useMovePage'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import headerlogo from '../../../../assets/images/headerlogo.png'
import UserInfo from './UserInfo'

const HeaderSearch = () => {
	const navigate = useNavigate()
	const inputRef = useRef(null)
	const { linkSearchProduct } = useMove()

	const searchKeyword = e => {
		e.preventDefault()
		const keyword = inputRef.current.value
		linkSearchProduct(keyword)
		inputRef.current.value = ''
	}
	return (
		<>
			<S.SearchContainer onSubmit={searchKeyword}>
				<S.HeaderLogoWrapper>
					<S.HeaderLogo
						src={headerlogo}
						alt="logo"
						onClick={() => navigate('/')}
					/>
				</S.HeaderLogoWrapper>
				<S.SearchBox>
					<S.SearchBar
						ref={inputRef}
						type="text"
						placeholder="어떤 상품을 찾으시나요?"
					/>
					<IconButton
						type="button"
						onClick={searchKeyword}
						sx={{
							p: '10px',
							color: '#009d91',
							position: 'absolute',
							right: 0,
						}}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</S.SearchBox>
				<S.UserInfoContainer>
					<UserInfo />
				</S.UserInfoContainer>
			</S.SearchContainer>
		</>
	)
}

export default HeaderSearch

export const S = {}

S.SearchContainer = styled.form`
	width: 100%;
	${flexCenter}
	height: 100%;
	padding: 0 20px;
`

S.SearchBox = styled.div`
	width: 380px;
	height: 42px;
	border-radius: 15px;
	border: 1px solid #009d91;
	padding: 8px 42px 8px 16px;
	position: relative;
	display: flex;
	align-items: center;
	margin: 0 40px;
`

S.SearchBar = styled.input`
	background-color: inherit;
	border: none;
	outline: none;
	font-size: 16px;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	transform: translateY(-50%);
`
S.HeaderLogoWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;
`
S.HeaderLogo = styled.img`
	width: 180px;
	cursor: pointer;
`

S.UserInfoContainer = styled.div`
	display: flex;
	align-items: center;
`
