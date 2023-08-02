import { isLoggedInAtom } from 'atom/header/atom'
import { isAtuhUi } from 'atom/header/uiatom'
import { useDevice } from 'hooks/mediaQuery/useDevice'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

const UserInfo = ({ user_profile_url, user_nick_name }) => {
	const [isLoggenIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const setIsLginUi = useSetRecoilState(isAtuhUi)
	const { isTablet } = useDevice()
	const navigate = useNavigate()

	const handleLogin = e => {
		e.preventDefault()
		setIsLoggedIn(true)
		setIsLginUi(true)
	}
	const handleLogout = e => {
		e.preventDefault()
		setIsLoggedIn(false)
	}

	const hadnleSignup = e => {
		e.preventDefault()
		setIsLginUi(flase)
	}
	return (
		<S.UserInfoContainer>
			{isLoggenIn ? (
				<S.UserInfoContent>
					<S.UserImageBox>
						<S.UserImage
							src={user_profile_url}
							alt={user_nick_name}
							onClick={() => navigate('/mypage')}
						/>
						<S.NotificationDot />
					</S.UserImageBox>
					<S.UserLoginContent isTablet={isTablet}>
						<Link
							to="/mypage"
							onClick={e => {
								e.preventDefault()
								navigate('/mypage')
							}}
						>
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
					<div onClick={handleLogin}>로그인</div>
					<span>I</span>
					<div alt="회원가입" onClick={hadnleSignup}>
						회원가입
					</div>
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
	${flexCenter}
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
		margin: ${({ isTablet }) => (isTablet ? '0 4px' : '0 20px')};
		font-size: 20px;
	}
`

S.UserImageBox = styled.div`
	${flexCenter}
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
