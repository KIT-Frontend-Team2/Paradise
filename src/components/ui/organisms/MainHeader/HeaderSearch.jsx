import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import useMove from 'hooks/useMovePage'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import headerlogo from '../../../../assets/images/headerlogo.png'
import UserInfo from './UserInfo'

const HeaderSearch = ({ newChat }) => {
	const navigate = useNavigate()
	const inputRef = useRef(null)
	const { linkSearchProduct } = useMove()

	const searchKeyword = e => {
		e.preventDefault()
		const keyword = inputRef.current.value.trim()
		const isStringOnly = /^[a-zA-Z가-힣\s]+$/
		if (keyword === '') {
			alert('검색어를 입력해주세요.')
			return
		}
		if (!isStringOnly.test(keyword)) {
			alert('특수문자를 제외한 검색어를 입력해주세요.')
			return
		}
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
					<UserInfo newChat={newChat} />
				</S.UserInfoContainer>
			</S.SearchContainer>
		</>
	)
}

export default HeaderSearch

export const S = {}

S.SearchContainer = styled.form`
	width: 100%;
	display: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? 'flex' : 'grid'};
	justify-content: space-between;
	align-items: center;
	height: 100%;
	grid-template-columns: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '' : '1fr 1fr'};
	grid-template-rows: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '' : '1fr 1fr'};
`

S.SearchBox = styled.div`
	width: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '280px' : 'calc(100% - 60px)'};
	height: 28px;
	border-radius: 10px;
	border: 1px solid #009d91;
	padding: 8px 42px 8px 16px;
	position: relative;
	display: flex;
	align-items: center;
	margin: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '0 40px' : '0'};
	grid-row: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '' : '2'};
	grid-column: ${({ theme }) =>
		theme.isDesktop || theme.isTabletAndLaptop ? '' : '1/3'};
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
