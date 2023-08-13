import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import headerlogo from '../../../../assets/images/headerlogo.png'
import { categories } from '../MainHeader/HeaderCategory'

const HeaderMobile = () => {
	const [menuClick, setMenuclick] = useState(false)
	const [searchClick, setSearchClick] = useState(false)

	const hadleMenuClick = () => {
		setMenuclick(!menuClick)
	}
	const handleSearchClick = () => {
		setSearchClick(!searchClick)
	}
	return (
		<>
			<AppBar
				sx={{
					position: 'fixed',
					backgroundColor: '#fff',
					boxShadow: 'none',
					borderBottom: '1px solid #ddd',
				}}
			>
				<Toolbar>
					<S.LogoBox>
						<img src={headerlogo} alt="logo" />
					</S.LogoBox>

					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						{searchClick ? (
							<>
								<S.SearchBar>
									<InputBase placeholder="어떤 상품을 찾으시나요?" />
								</S.SearchBar>
								<S.CancelButton onClick={handleSearchClick}>
									취소
								</S.CancelButton>
							</>
						) : (
							<>
								<IconButton color="#009d91" onClick={handleSearchClick}>
									<SearchIcon />
								</IconButton>
								<IconButton color="#009d91" onClick={hadleMenuClick}>
									{menuClick ? <CloseIcon /> : <MenuIcon />}
								</IconButton>
							</>
						)}
					</Box>
				</Toolbar>
			</AppBar>
			<S.Content>
				{menuClick && (
					<S.Nav>
						{categories.map(category => (
							<S.Category>
								<NavLink
									to={`/?category=${category.path}`}
									activeClassName="selected"
									onClick={hadleMenuClick}
								>
									{category.label}
								</NavLink>
							</S.Category>
						))}
					</S.Nav>
				)}
			</S.Content>
		</>
	)
}

export default HeaderMobile

export const S = {}

S.LogoBox = styled.div`
	max-height: 48px;
	width: auto;
	overflow: hidden;
	img {
		width: 100px;
		max-height: 28px;
		object-fit: contain;
	}
`

S.Nav = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	transition: transform 0.3s, opacity 0.1s;
	border-bottom: 1px solid #eaebee;
`

S.Category = styled.div`
	padding: 8px;

	a {
		text-decoration: none;
		color: black;
	}
	.selected {
		color: #009d91;
	}
`
S.Content = styled.div`
	padding-top: 64px;
`

S.SearchBar = styled.div`
	display: flex;
	align-items: center;
	background-color: #f1f3f5;
	border-radius: 6px;
	padding: 2px 8px;

	&.MuiInputBase-root {
		width: 100%;
	}

	::placeholder {
		font-size: 12px;
	}
`

S.CancelButton = styled.button`
	background: none;
	border: none;
	margin-left: 8px;
	font-size: 14px;
	cursor: pointer;
	font-weight: bold;
	&:focus {
		outline: none;
	}
`
