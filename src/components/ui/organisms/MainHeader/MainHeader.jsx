import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton } from '@mui/material'
import { headerMock } from '__mock__/datas/header.mock'
import { selectApiTypeAtom } from 'atom/header/atom'
import { API_KEYWORD } from 'consts/header/apiKeyword'
import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import HeaderCategory from './HeaderCategory'
import HeaderChatAlarm from './HeaderChatAlarm'
import HeaderScroll from './HeaderScroll'
import UserInfo from './UserInfo'
import headerlogo from './img/headerlogo.png'

const MainHeader = props => {
	const setSelectType = useSetRecoilState(selectApiTypeAtom)
	const navigate = useNavigate()
	const inputRef = useRef(null)
	const TypeHandling = API_KEY => {
		setSelectType(API_KEY)
		navigate(API_KEY)
	}
	const searchKeyword = e => {
		e.preventDefault()
		const keyword = inputRef.current.value
		navigate('/search/' + keyword)
		inputRef.current.value = ''
	}
	return (
		<>
			<HeaderScroll />

			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '200px',
					backgroundColor: '#FFFFFF',
					padding: '16px',
					boxSizing: 'border-box',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<S.SearchContainer onSubmit={searchKeyword}>
					<S.HeaderLogo
						src={headerlogo}
						alt="logo"
						onClick={() => navigate('/')}
					/>
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

					<UserInfo
						user_profile_url={headerMock.data.user_info.user_profile_url}
						user_nick_name={headerMock.data.user_info.user_nick_name}
					/>
				</S.SearchContainer>

				<S.Container>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							height: 40,
							padding: '10px 0 10px 0',
							fontSize: '20px',
						}}
					>
						<HeaderCategory />
					</Box>
					<Box
						onClick={() => TypeHandling(API_KEYWORD.SECONDHAND_DEALS)}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							height: 40,
							padding: '10px 0 10px 0',
							fontSize: '20px',
							'&:hover': {
								color: '#009d91',
							},
						}}
					>
						<span>중고거래</span>
					</Box>
					<Box
						onClick={() => TypeHandling(API_KEYWORD.FREE_SHARING)}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							height: 40,
							padding: '10px 0 10px 0',
							fontSize: '20px',
							'&:hover': {
								color: '#009d91',
							},
						}}
					>
						<span>무료나눔</span>
					</Box>
					<Box
						onClick={() => TypeHandling(API_KEYWORD.POPULAR_PRODUCTS)}
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							height: 40,
							padding: '10px 0 10px 0',
							fontSize: '20px',
							'&:hover': {
								color: '#009d91',
							},
						}}
					>
						<span>인기상품</span>
					</Box>

					<S.ParadiseSection>
						<span>파라다이스</span> 서비스 소개
					</S.ParadiseSection>
					<HeaderChatAlarm />
				</S.Container>
			</Box>
		</>
	)
}

export default MainHeader

const SearchContainer = styled.form`
	width: 100%;
	${flexCenter}
	height: 100%;
	position: relative;
`

const SearchBox = styled.div`
	width: 380px;
	height: 42px;
	border-radius: 15px;
	border: 1px solid #009d91;
	padding: 8px 42px 8px 16px;
	position: absolute;
`

const SearchBar = styled.input`
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

const Container = styled.div`
	width: 80%;
	position: relative;
	${flexCenter}
	margin-top: 20px;
	span {
		cursor: pointer;
	}
`

const ParadiseSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	font-size: 16px;
	border: 1px solid #999;
	border-radius: 20px;
	color: #999;

	cursor: pointer;
	span {
		color: #009d91;
		font-weight: bold;
		margin-right: 5px;
	}
`

const HeaderLogo = styled.img`
	width: 200px;
	position: absolute;
	left: 20%;
	cursor: pointer;
`

const S = {
	SearchContainer,
	SearchBox,
	SearchBar,
	Container,
	ParadiseSection,
	HeaderLogo,
}
