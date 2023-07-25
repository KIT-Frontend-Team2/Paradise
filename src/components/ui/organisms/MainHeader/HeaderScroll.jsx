import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'
import { headerMock } from '__mock__/datas/header.mock'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import useMove from 'hooks/useMovePage'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import HeaderCategory from './HeaderCategory'
import UserInfo from './UserInfo'

const HeaderScroll = () => {
	const [isVisible, setIsVisible] = useState(false)
	const { linkMainPage, linkShareList, linkMyPage } = useMove()
	const navigate = useNavigate()
	const { isTablet } = useDevice()
	const inputRef = useRef(null)

	const searchKeyword = e => {
		e.preventDefault()
		const keyword = inputRef.current.value
		navigate('/search/' + keyword)
		inputRef.current.value = ''
	}
	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset
		if (currentScrollPos > 200) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return isVisible ? (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				maxWidth: '1100px',
				width: '100%',
				height: '55px',
				backgroundColor: '#FFFFFF',
				padding: '16px',
				boxSizing: 'border-box',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 30,
				// boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
			}}
		>
			<S.Container>
				<Box
					isTablet={isTablet}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: isTablet ? 'flex-start' : 'center',
						gap: isTablet ? '10px' : '36px',
						fontSize: isTablet ? '14px' : '18px',
						width: '100%',
					}}
				>
					<HeaderCategory />

					<span onClick={linkMainPage}>메인페이지</span>
					<span onClick={linkShareList}>무료나눔</span>
					<span onClick={linkMyPage}>마이페이지</span>
				</Box>
				<S.UserSearchContainer onSubmit={searchKeyword}>
					<S.SearchBox>
						<SearchIcon
							onClick={searchKeyword}
							sx={{
								position: 'absolute',
								right: '8px',
								color: '#000',
								cursor: 'pointer',
								top: '4px',
							}}
						/>
						<S.SearchBar
							ref={inputRef}
							type="text"
							placeholder="어떤 상품을 찾으시나요?"
						/>
					</S.SearchBox>
					<S.UserInfoContainer>
						<UserInfo
							user_profile_url={headerMock.data.user_info.user_profile_url}
							user_nick_name={headerMock.data.user_info.user_nick_name}
						/>
					</S.UserInfoContainer>
				</S.UserSearchContainer>
			</S.Container>
		</Box>
	) : null
}

export default HeaderScroll

export const S = {}

S.Container = styled.div`
	width: 100%;
	${flexCenter}
	height: 100%;
	span {
		cursor: pointer;
		&:hover {
			color: #009d91;
		}
	}
`

S.UserSearchContainer = styled.form`
	display: flex;
	align-items: center;
	margin: 0 32px;
`

S.SearchBox = styled.div`
	height: 32px;
	width: 240px;
	border: 1px solid #f8f8f8;
	background-color: #f8f8f8;
	border-radius: 6px;
	position: relative;
`

S.SearchBar = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
	width: 100%;
	height: 100%;
	padding: 0 32px 0 8px;
	font-size: 12px;

	::placeholder {
		color: #999;
	}
`
S.UserInfoContainer = styled.div`
	margin-left: 24px;
	display: flex;
	align-items: center;
`
