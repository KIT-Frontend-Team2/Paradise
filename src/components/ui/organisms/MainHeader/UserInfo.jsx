import React from 'react'
import styled from 'styled-components'
import { flexCenter } from 'styles/common'

const UserInfo = ({ user_profile_url, user_nick_name }) => {
	return (
		<UserInfoContainer>
			<UserImage src={user_profile_url} alt={user_nick_name} />
			<UserName>
				{user_nick_name} 님 <sapn>I</sapn> <a href="/">로그아웃</a>
			</UserName>
		</UserInfoContainer>
	)
}

export default UserInfo

const UserInfoContainer = styled.div`
	${flexCenter}
	gap:10px;
`

const UserImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin-bottom: 8px;
`

const UserName = styled.div`
	font-size: 16px;
	color: #333;
	span {
		color: #333;
		margin: 0 20px;
		font-size: 36px;
	}
`
