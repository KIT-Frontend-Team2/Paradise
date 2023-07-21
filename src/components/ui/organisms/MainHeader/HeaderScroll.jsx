import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'
import { headerMock } from '__mock__/datas/header.mock'
import { selectApiTypeAtom } from 'atom/header/atom'
import { API_KEYWORD } from 'consts/header/apiKeyword'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import HeaderCategory from './HeaderCategory'
import UserInfo from './UserInfo'

const HeaderScroll = () => {
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
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				width: '100%',
				height: '55px',
				backgroundColor: '#FFFFFF',
				padding: '16px',
				boxSizing: 'border-box',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<S.Container>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '80px',
						fontSize: '20px',
					}}
				>
					<HeaderCategory />

					<span onClick={() => TypeHandling(API_KEYWORD.SECONDHAND_DEALS)}>
						중고거래
					</span>
					<span onClick={() => TypeHandling(API_KEYWORD.FREE_SHARING)}>
						무료나눔
					</span>
					<span onClick={() => TypeHandling(API_KEYWORD.POPULAR_PRODUCTS)}>
						인기상품
					</span>
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
					<UserInfo
						user_profile_url={headerMock.data.user_info.user_profile_url}
						user_nick_name={headerMock.data.user_info.user_nick_name}
					/>
				</S.UserSearchContainer>
			</S.Container>
		</Box>
	)
}

export default HeaderScroll

export const S = {}

S.Container = styled.div`
	width: 100%;
	${flexCenter};
	height: 100%;
	span {
		cursor: pointer;
	}
`

S.UserSearchContainer = styled.form`
	display: flex;
	align-items: center;
	margin: 0 60px;
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
