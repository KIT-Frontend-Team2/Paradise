import { isLoggedInAtom } from 'atom/header/atom'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

import useUserAPi from '../../../../hooks/service/user.service'
import useMove from '../../../../hooks/useMovePage'

const UserInfo = ({ user_profile_url, user_nick_name }) => {
	const [isLoggenIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const { isTablet } = useDevice()

	const handleLogin = e => {
		e.preventDefault()
		setIsLoggedIn(true)
	}
	const { linkMainPage, linkMyPage } = useMove()
	const { mutate, isSuccess } = useUserAPi.logout()

	const handleLogout = e => {
		e.preventDefault()
		mutate()
	}

	useEffect(() => {
		if (isSuccess === true) {
			linkMainPage()
		}
	}, [isSuccess])

	return (
		<S.UserInfoContainer>
			{isLoggenIn ? (
				<S.UserInfoContent>
					<S.UserImageBox>
						<S.UserImage
							src={user_profile_url}
							alt={user_nick_name}
							onClick={linkMyPage}
						/>
						<S.NotificationDot />
					</S.UserImageBox>
					<S.UserLoginContent istablet={isTablet.toString()}>
						<Link to="#" onClick={linkMyPage}>
							{user_nick_name} 님
						</Link>
						<span>I</span>
						<Link to="/" onClick={handleLogout}>
							로그아웃
						</Link>
					</S.UserLoginContent>
				</S.UserInfoContent>
			) : (
				<S.UserLoginContent>
					<Link to="/login" alt="로그인" onClick={handleLogin}>
						로그인
					</Link>
					<span>I</span>
					<Link to="/signup" alt="회원가입">
						회원가입
					</Link>
				</S.UserLoginContent>
			)}
		</S.UserInfoContainer>
	)
}

export default UserInfo

export const S = {}

S.UserInfoContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`

S.UserInfoContent = styled.div`
	${flexCenter};
	gap: 10px;
	position: relative;
`

S.UserLoginContent = styled.div`
	display: flex;
	align-items: center;

	a {
		color: #000;
		text-decoration: none;
		max-width: 100px;
		white-space: nowrap;
		font-size: 14px;
	}

	span {
		color: #999;
		margin: ${({ istablet }) => (istablet ? '0 4px' : '0 20px')};
		font-size: 20px;
	}
`

S.UserImageBox = styled.div`
	${flexCenter};
	position: relative;
`

S.UserImage = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	margin-bottom: 8px;
	cursor: pointer;
`

S.NotificationDot = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	border: 2px solid #fff;
	background-color: #f2714f;
	position: absolute;
	top: -4px;
	right: 0;
`
