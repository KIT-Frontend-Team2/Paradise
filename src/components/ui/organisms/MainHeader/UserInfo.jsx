import { isLoggedInAtom } from 'atom/header/atom'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

const UserInfo = ({ user_profile_url, user_nick_name }) => {
	const [isLoggenIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
	const navigate = useNavigate()
	const handleLogin = e => {
		e.preventDefault()
		setIsLoggedIn(true)
	}
	const handleLogout = e => {
		e.preventDefault()
		setIsLoggedIn(false)
	}
	return (
		<S.SignBox>
			{isLoggenIn ? (
				<S.UserInfoContainer>
					<S.UserImageBox>
						<S.UserImage
							src={user_profile_url}
							alt={user_nick_name}
							onClick={() => navigate('/mypage')}
						/>
						<S.NotificationDot />
					</S.UserImageBox>
					<S.UserName>
						<a
							href="/mypage"
							onClick={e => {
								e.preventDefault()
								navigate('/mypage')
							}}
						>
							{user_nick_name} 님
						</a>{' '}
						<sapn>I</sapn>{' '}
						<a href="/" onClick={handleLogout}>
							로그아웃
						</a>
					</S.UserName>
				</S.UserInfoContainer>
			) : (
				<>
					<a href="/login" alt="로그인" onClick={handleLogin}>
						로그인
					</a>
					<span>I</span>
					<a href="/signup" alt="회원가입">
						회원가입
					</a>
				</>
			)}
		</S.SignBox>
	)
}

export default UserInfo

export const S = {}

S.UserInfoContainer = styled.form`
	${flexCenter}
	gap:10px;
	position: relative;
`

S.UserImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin-bottom: 8px;
	cursor: pointer;
`

S.UserName = styled.div`
	font-size: 16px;
	color: #333;
	span {
		color: #333;
		margin: 0 20px;
		font-size: 36px;
	}
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

S.UserImageBox = styled.div`
	${flexCenter}
	position: relative;
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
