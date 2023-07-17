import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton } from '@mui/material'
import { headerMock } from '__mock__/datas/header.mock'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import UserInfo from './UserInfo'

const MainHeader = props => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	return (
		<Box
			sx={{
				position: 'fixed',
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
			<S.SearchContainer>
				<S.SearchBox>
					<S.SearchBar type="text" placeholder="어떤 상품을 찾으시나요?" />
					<IconButton
						type="button"
						sx={{ p: '10px', color: '#009d91', position: 'absolute', right: 0 }}
						aria-label="search"
					>
						<SearchIcon />
					</IconButton>
				</S.SearchBox>
				<S.SignBox>
					{/* <a href="/" alt="로그인">
						로그인
					</a>
					<span>I</span>
					<a href="/" alt="회원가입">
						회원가입
					</a> */}
					<UserInfo
						user_profile_url={headerMock.data.user_info.user_profile_url}
						user_nick_name={headerMock.data.user_info.user_nick_name}
					/>
				</S.SignBox>
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
					<S.InnerBox onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
						<MenuIcon />
						카테고리
						{isDropdownOpen && (
							<S.DropdownMenu>
								<span>카테고리</span>
								<span>카테고리</span>
								<span>카테고리</span>
								<span>카테고리</span>
								<span>카테고리</span>
								<span>카테고리</span>
								<span>카테고리</span>
								<span>카테고리</span>
							</S.DropdownMenu>
						)}
					</S.InnerBox>
				</Box>
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
					<span>중고거래</span>
				</Box>
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
					<span>무료나눔</span>
				</Box>
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
					<span>인기상품</span>
				</Box>
				<S.ParadiseSection>
					<span>파라다이스</span> 서비스 소개
				</S.ParadiseSection>
			</S.Container>
		</Box>
	)
}

export default MainHeader

const SearchContainer = styled.form`
	width: 100%;
	${flexCenter}
	height: 100%;
`

const SearchBox = styled.div`
	width: 380px;
	height: 42px;
	border-radius: 15px;
	border: 1px solid #009d91;
	padding: 8px 42px 8px 16px;
	position: relative;
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
	${flexCenter}
	margin-top: 20px;
	span {
		cursor: pointer;
	}
`

const InnerBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
`

const SignBox = styled.div`
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

const DropdownMenu = styled.div`
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
		&:hover {
			background-color: #f5f5f5;
		}
	}
`

const S = {
	SearchContainer,
	SearchBox,
	SearchBar,
	Container,
	InnerBox,
	SignBox,
	ParadiseSection,
	DropdownMenu,
}
